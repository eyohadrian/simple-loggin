cd kotlin-backend
./gradlew build
docker build -t adrianasensiomonterde/kotlin-backend .

cd ../react-frontend
yarn build
docker build -t adrianasensiomonterde/react-frontend .

docker push adrianasensiomonterde/kotlin-backend
docker push adrianasensiomonterde/react-frontend
