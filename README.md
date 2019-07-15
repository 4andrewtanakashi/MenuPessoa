# Projetos:

Instalaçao do React JS :
    https://www.techomoro.com/how-to-install-and-setup-a-react-app-on-ubuntu-18-04-1/
    ou
    https://nodejs.org/en/download/
    https://github.com/nodejs/help/wiki/Installation

    Para executar:
        1º Na pasta do projeto : npm install
        2º npm start

    
Instale a versão mais recente do Eclipse:
    https://www.eclipse.org/downloads/

Instale o Spring Boot+Maven+Gradle:
    https://docs.spring.io/spring-boot/docs/current/reference/html/getting-started-installing-spring-boot.html


    Se instalou o Gradle e o Spring pelo sdk então :
        export PATH=$PATH:~/.sdkman/candidates/gradle/5.4.1/bin
        export PATH=$PATH:~/.sdkman/candidates/springboot/2.1.5.RELEASE/bin


Se fez git clone então :
    1º No diretório da pasta do cadastrar : mvn build
                                            gradle build
                                            gradle wrapper
                                            ./gradlew build --scan
                                            para testar:
                                            ./gradlew bootRun
    
    2º No diretório da pasta do frontEnd : npm build
                                        para testar :
                                            npm start