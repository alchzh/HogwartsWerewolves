import os
from jinja2 import Environment, FileSystemLoader

TEMPLATE_ENVIRONMENT = Environment(
    autoescape=False,
    loader=FileSystemLoader(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'templates')),
    trim_blocks=False)


def render_template(template_filename, context):
    return TEMPLATE_ENVIRONMENT.get_template(template_filename).render(context)
 
with open("data.txt", "r") as f:
    data = f.readlines()

fname = "index.html"
context = {
    'data': data
}

html = render_template('index-template.html', context)

with open(fname, 'w+') as f:
    f.write(html.replace("1</span>th","1</span>st").replace("2</span>th","2</span>nd").replace("3</span>th","3</span>rd"))
