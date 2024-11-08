package handlers

import (
	"github.com/gofiber/fiber/v2"
)

func CreateUser(c *fiber.Ctx) error {
	// Implementasi untuk membuat user
	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "User created",
	})
}

func Login(c *fiber.Ctx) error {
	// Implementasi untuk login
	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Login successful",
	})
}
