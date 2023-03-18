# Install and check dependancies
node -v
npm -v
python -v

# update url in Login.js & config.js if deploying live
# Make sure you run the following if you get any errors.
nvm use v14.20.6
# nvm use v14.17.6

# Try running yarn if installation is unsuccessful (this should work)
yarn

# Start the frontend after yarn
npm start 

# Node-sass might give an error
npm chache clean --force

#  
npm i --unsafe-perm node-sass

# run frontend by using 
npm run api
# make sure node v14.17.6 is actively installed





[1/4] 🔍  Resolving packages...
warning mongoose > @types/mongodb > @types/bson@4.2.0: This is a stub types definition. bson provides its own type definitions, so you do not need this installed.
warning node-sass > node-gyp > tar@2.2.2: This version of tar is no longer supported, and will not receive security updates. Please upgrade asap.
warning node-sass > request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
warning node-sass > node-gyp > request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
warning node-sass > request > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning node-sass > request > har-validator@5.1.5: this library is no longer supported
warning react-router-dom > react-router > mini-create-react-context@0.4.1: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.
warning react-scripts > babel-eslint@10.1.0: babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
warning react-scripts > webpack-dev-server > chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
warning react-scripts > webpack-dev-server > chokidar > fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
warning react-scripts > webpack-dev-server > webpack-log > uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
warning react-scripts > workbox-webpack-plugin > source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
warning react-scripts > workbox-webpack-plugin > workbox-build > source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
warning react-scripts > @pmmmwh/react-refresh-webpack-plugin > native-url > querystring@0.2.1: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
warning react-scripts > webpack-dev-server > url > querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
warning react-scripts > @svgr/webpack > @svgr/plugin-svgo > svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
warning react-scripts > terser-webpack-plugin > cacache > @npmcli/move-file@1.1.2: This functionality has been moved to @npmcli/fs
warning react-scripts > webpack > watchpack > watchpack-chokidar2 > chokidar@2.1.8: Chokidar 2 does not receive security updates since 2019. Upgrade to chokidar 3 with 15x fewer dependencies
warning react-scripts > webpack > micromatch > snapdragon > source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
warning react-scripts > resolve-url-loader > rework > css > source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
warning react-scripts > webpack > micromatch > snapdragon > source-map-resolve > source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
warning react-scripts > workbox-webpack-plugin > workbox-build > @hapi/joi@15.1.1: Switch to 'npm install joi'
warning react-scripts > workbox-webpack-plugin > workbox-build > rollup-plugin-babel@4.4.0: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-babel.
warning react-scripts > workbox-webpack-plugin > workbox-build > rollup-plugin-terser@5.3.1: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-terser
warning react-scripts > babel-jest > @jest/transform > jest-haste-map > sane@4.1.0: some dependency vulnerabilities fixed, support for node < 10 dropped, and newer ECMAScript syntax/features added
warning react-scripts > @svgr/webpack > @svgr/plugin-svgo > svgo > stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
warning react-scripts > postcss-preset-env > postcss-color-hex-alpha > postcss-values-parser > flatten@1.0.3: flatten is deprecated in favor of utility frameworks such as lodash.
warning react-scripts > optimize-css-assets-webpack-plugin > cssnano > cssnano-preset-default > postcss-svgo > svgo@1.3.2: This SVGO version is no longer supported. Upgrade to v2.x.x.
warning react-scripts > resolve-url-loader > rework > css > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
warning react-scripts > webpack > micromatch > snapdragon > source-map-resolve > urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
warning react-scripts > webpack > micromatch > snapdragon > source-map-resolve > resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
warning react-scripts > workbox-webpack-plugin > workbox-build > @hapi/joi > @hapi/address@2.1.4: Moved to 'npm install @sideway/address'
warning react-scripts > workbox-webpack-plugin > workbox-build > @hapi/joi > @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
warning react-scripts > workbox-webpack-plugin > workbox-build > @hapi/joi > @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
warning react-scripts > workbox-webpack-plugin > workbox-build > @hapi/joi > @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
warning react-scripts > workbox-webpack-plugin > workbox-build > @hapi/joi > @hapi/topo > @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
warning react-scripts > workbox-webpack-plugin > workbox-build > @rollup/plugin-replace > magic-string > sourcemap-codec@1.4.8: Please use @jridgewell/sourcemap-codec instead
warning react-scripts > workbox-webpack-plugin > workbox-build > strip-comments > babel-plugin-transform-object-rest-spread > babel-runtime > core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.


warning " > @hocuspocus/server@1.1.1" has unmet peer dependency "y-protocols@^1.0.5".
warning " > @hocuspocus/server@1.1.1" has unmet peer dependency "yjs@^13.5.29".
warning " > @testing-library/user-event@12.8.3" has unmet peer dependency "@testing-library/dom@>=7.21.4".
warning " > @uiw/react-textarea-code-editor@1.6.0" has unmet peer dependency "@babel/runtime@>=7.10.0".
warning " > @babel/plugin-proposal-decorators@7.21.0" has unmet peer dependency "@babel/core@^7.0.0-0".
warning "react-scripts > @typescript-eslint/eslint-plugin > tsutils@3.21.0" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
warning " > react-typist@2.0.5" has incorrect peer dependency "react@^0.14 || ^15.0 || ^16.0".
warning " > react-typist@2.0.5" has incorrect peer dependency "react-dom@^^0.14 || ^15.0 || ^16.0".
warning " > styled-components@5.3.9" has unmet peer dependency "react-is@>= 16.8.0".
warning " > tailwindcss@2.2.19" has unmet peer dependency "autoprefixer@^10.0.2".
warning " > tailwindcss@2.2.19" has unmet peer dependency "postcss@^8.0.9".
warning "tailwindcss > postcss-nested@5.0.6" has unmet peer dependency "postcss@^8.2.14".