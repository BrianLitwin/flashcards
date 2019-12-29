FROM python:3.6

ENV PYTHONUNBUFFERED 1

RUN mkdir /temp

WORKDIR /temp

ADD . /temp/

RUN pip install -r requirements.txt
