package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"

	"apps/api/config"
	"apps/api/routers"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	// Get the current working directory
	cwd, _ := os.Getwd()

	// Resolve absolute path to root .env file
	rootEnvPath := filepath.Join(cwd, "..", ".env")
	apiEnvPath := filepath.Join(cwd, ".env")

	// Load server configuration from apps/.env
	if err := godotenv.Load(rootEnvPath); err != nil {
		log.Fatalf("Error loading server .env file from apps/: %v", err)
	}

	// Load database configuration from apps/api/.env
	if err := godotenv.Load(apiEnvPath); err != nil {
		log.Fatalf("Error loading database .env file from apps/api/: %v", err)
	}

	// Initialize Fiber app
	app := fiber.New()

	// Koneksi ke database
	config.ConnectDatabase()

	// Setup route
	routers.SetupRoutes(app)

	// Retrieve HOST and PORT from environment variables or set default values
	host := os.Getenv("HOST")
	port := os.Getenv("PORT")
	if host == "" {
		host = "0.0.0.0" // default host
	}
	if port == "" {
		port = "8080" // default port
	}

	// Start the application on the specified host and port
	address := fmt.Sprintf("%s:%s", host, port)
	if err := app.Listen(address); err != nil {
		log.Fatal(err)
	}
}
