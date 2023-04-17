FROM python:3.8-slim-buster
WORKDIR /python-docker
# copy the requirements file into the image
COPY requirements.txt requirements.txt

# install the dependencies and packages in the requirements file
RUN pip install -r requirements.txt

# copy every content from the local file to the image
COPY . .

EXPOSE 8000

CMD [ "python", "./server.py"]
