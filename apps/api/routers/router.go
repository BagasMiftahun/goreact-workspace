package routers

import (
	"apps/api/handlers"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	api := app.Group("/api")
	{
		api.Post("/users", handlers.CreateUser)
		api.Post("/auth/login", handlers.Login)
	}
}
