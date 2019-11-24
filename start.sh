cd kotlin-backend
./gradlew build
docker build -t kotlin-backend .

cd ../react-frontend
yarn build
docker build -t frontend-backend .