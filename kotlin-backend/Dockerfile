FROM openjdk:11.0-stretch

ENV APPLICATION_USER ktor
RUN useradd $APPLICATION_USER

RUN mkdir /app
RUN chown -R $APPLICATION_USER /app

USER $APPLICATION_USER

COPY ./build/libs/kotlin-backend-1.0-SNAPSHOT.jar /app/kotlin-backend-1.0-SNAPSHOT.jar
WORKDIR /app

CMD ["java", "-server", "-XX:+UseG1GC", "-XX:MaxGCPauseMillis=100", "-XX:+UseStringDeduplication", "-jar", "kotlin-backend-1.0-SNAPSHOT.jar"]