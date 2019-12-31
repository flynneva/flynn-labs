from flask_assets import Bundle, Environment
from app import app

bundles = {

    'base_js': Bundle(
        'js/script.js',
        'js/searchTable.js',
        output='gen/base.js'),

    'base_css': Bundle(
        'css/style.css',
        output='gen/base.css')

}

assets = Environment(app)

assets.register(bundles)
