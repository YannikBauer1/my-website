#!/usr/bin/env python3
"""One-off: turn the static pages' <main> into React page components. Kept for reference."""
import re, json, sys
from html.parser import HTMLParser
SRC='/Users/yannik/GitHub/my-website/scrollcraft/builds/studio/'
VOID={'img','br','hr','input','meta','link','path','rect','circle','polygon'}
CAMEL={'class':'className','fetchpriority':'fetchPriority','stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','stroke-miterlimit':'strokeMiterlimit','clip-path':'clipPath','viewbox':'viewBox','aria-hidden':'aria-hidden'}
TRANS={'alt','aria-label'}
def js(s): return json.dumps(s, ensure_ascii=False)
class P(HTMLParser):
    def __init__(s): super().__init__(convert_charrefs=True); s.out=[]; s.depth=0; s.svg=0
    def ind(s): return '  '*(s.depth+2)
    def attrs(s,tag,attrs):
        o=[]
        for k,v in attrs:
            k2=CAMEL.get(k,k)
            if v is None: o.append(k2); continue
            if k in TRANS and v and not s.svg: o.append(f'{k2}={{t({js(v)})}}')
            elif k=='src' and v.startswith('assets/'): o.append(f'{k2}="/{v}"')
            elif k in('width','height') and tag=='img': o.append(f'{k2}={{{v}}}')
            else: o.append(f'{k2}={js(v)}')
        return (' '+' '.join(o)) if o else ''
    def handle_starttag(s,tag,attrs):
        d=dict(attrs)
        if tag=='svg': s.svg+=1
        name=tag
        if tag=='a':
            h=d.get('href','')
            if h.startswith('mailto:'): attrs=[(k,v) for k,v in attrs if k!='href']+[('href','mailto:'+'__EMAIL__')]
            elif not h.startswith('http') and not h.startswith('#'):
                name='A'; h='/'+h.replace('index.html','').replace('.html','')
                attrs=[(k,v) for k,v in attrs if k!='href']+[('to',h)]
        s.stack=getattr(s,'stack',[]); 
        a=s.attrs(tag,attrs).replace('"mailto:__EMAIL__"','{`mailto:${EMAIL}`}')
        if tag in VOID: s.out.append(f'{s.ind()}<{name}{a} />'); 
        else: s.out.append(f'{s.ind()}<{name}{a}>'); s.stack.append(name); s.depth+=1
    def handle_endtag(s,tag):
        if tag in VOID: return
        if tag=='svg': s.svg-=1
        s.depth-=1; s.out.append(f'{s.ind()}</{s.stack.pop()}>')
    def handle_data(s,data):
        if not data.strip():
            if '\n' not in data and data: s.out.append(f'{s.ind()}{{" "}}')
            return
        t=data.strip(); lead=' ' if data[0].isspace() and '\n' not in data[:len(data)-len(data.lstrip())] else ''; trail=' ' if data[-1].isspace() and '\n' not in data[len(data.rstrip()):] else ''
        body='EMAIL' if '@' in t else f't({js(t)})'
        s.out.append(f'{s.ind()}'+(f'{{" "}}' if lead else '')+'{'+body+'}'+(f'{{" "}}' if trail else ''))
    def handle_comment(s,d): pass
def convert(html):
    p=P(); p.feed(html); return '\n'.join(p.out)
def clean(t):
    t=re.sub(r'<!--lang-->.*?<!--/lang-->','',t,flags=re.S); return t
NAMES={'index':'Home','work':'Work','credentials':'Credentials','impressum':'Impressum','privacy':'Privacy'}
for f,name in NAMES.items():
    t=clean(open(SRC+f+'.html',encoding='utf8').read())
    main=t[t.index('<main id="main">')+len('<main id="main">'):t.index('</main>')]
    i=main.index('<section class="end'); body=main[:i]; end=main[i:]
    bare='end--bare' in end
    jsx=convert(body)
    open(f'src/pages/{name}.jsx','w',encoding='utf8').write(f'''import {{ useT }} from "../i18n.jsx";
import A from "../components/A.jsx";
import End from "../components/End.jsx";
import {{ EMAIL }} from "../site.js";

export default function {name}() {{
  const t = useT();
  return (
    <>
{jsx}
      <End{" bare" if bare else ""} />
    </>
  );
}}
''')
    if f=='index': open('scripts/_end.jsx','w',encoding='utf8').write(convert(end))
    if f=='impressum': open('scripts/_end_bare.jsx','w',encoding='utf8').write(convert(end))
t=clean(open(SRC+'index.html',encoding='utf8').read())
bar=t[t.index('<header class="bar">'):t.index('</header>')+9]
open('scripts/_bar.jsx','w',encoding='utf8').write(convert(bar))
