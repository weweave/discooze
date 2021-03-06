(function(global) {
    System.config({
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            'app': 'app',
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
            '@ngx-translate/core': 'npm:@ngx-translate/core/bundles/core.umd.js',
            '@ngx-translate/http-loader': 'npm:@ngx-translate/http-loader/bundles/http-loader.umd.js',
            'rxjs': 'npm:rxjs',
            'tslib': 'npm:tslib/tslib.js',
            'moment': 'npm:moment/moment.js',
            'jquery': 'npm:jquery/dist/jquery.min.js',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'systemjs-angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);