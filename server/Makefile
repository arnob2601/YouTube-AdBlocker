# Define variables
IMAGE_NAME = youtube-forwarder
CONTAINER_NAME = youtube-forwarder-container
PORT = 5000

# Build the Docker image
build:
	docker build -t $(IMAGE_NAME) .

# Run the container
run:
	docker run -d --rm -p $(PORT):5000 --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Stop the container
stop:
	docker stop $(CONTAINER_NAME)

# Remove the Docker image
clean:
	docker rmi $(IMAGE_NAME) || true
