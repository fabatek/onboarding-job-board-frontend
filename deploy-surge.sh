#Build reactjs app with production mode
yarn run build

#Move to build folder
cd build

#Clone index.html into 200.html
cp index.html 200.html

#Start deploy via surge
surge .job-board-phuongtm.surge.sh