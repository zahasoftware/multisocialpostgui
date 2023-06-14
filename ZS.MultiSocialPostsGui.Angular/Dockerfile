#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/sdk:7.0-alpine AS publish

WORKDIR /src
RUN apk update \
    && apk upgrade \ 
    && apk add nodejs npm

RUN echo "$PWD"

COPY ./multisocialpost/ZS.MultiSocialPost multisocialpost/ZS.MultiSocialPost 
COPY ./multisocialpostgui/ZS.MultiSocialPostsGui.Angular multisocialpostgui/ZS.MultiSocialPostsGui.Angular

RUN dotnet restore "./multisocialpostgui/ZS.MultiSocialPostsGui.Angular/ZS.MultiSocialPostsGui.csproj" --runtime alpine-x64

RUN dotnet publish "./multisocialpostgui/ZS.MultiSocialPostsGui.Angular/ZS.MultiSocialPostsGui.csproj" -c Release -o /app/publish  \
    --no-restore \
    --runtime alpine-x64 \
    --self-contained true \
    /p:PublishTrimmed=true \
    /p:PublishSingleFile=true

FROM mcr.microsoft.com/dotnet/runtime-deps:7.0-alpine AS final

RUN apk update \
    && apk upgrade \ 
    && apk add nodejs npm
RUN apk upgrade musl

WORKDIR /app
EXPOSE 80
COPY --from=publish /app/publish .
ENTRYPOINT ["./ZS.MultiSocialPostsGui"]