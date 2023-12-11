# federated-nextjs
Pre-requisite:
1. install node >= 18.19
2. install yarn, run npm -g install yarn

to run, go to federated-nextjs folder and run:
1. yarn
2. yarn run start:remote
3. yarn run start:host

to build and export into static app
1. yarn run build:remote
2. yarn run build:host

to run the built static exported file locally
1. install http-server, npm -g install http-server
2. go to remote app and run http-server out --port=3000
3. go to host aoo and run http-server out --port=3001
