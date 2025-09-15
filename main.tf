terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>3.0"
    }
  }

  required_version = ">= 1.3.0"
}

provider "azurerm" {
  features {}

}

# Resource Group
resource "azurerm_resource_group" "rg" {
  name     = "rg-terraform-react"
  location = "West Europe"
}

# Static Web App
resource "azurerm_static_web_app" "reactapp" {
  name                = "terraform-react-app-spectraneo"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location

  sku_tier = "Free"
  sku_size = "Free"

  tags = {
    Environment = "Development"
    Project     = "Terraform React App"
  }
}

# Output the Static Web App URL
output "static_web_app_url" {
  description = "The default hostname of the static web app"
  value       = azurerm_static_web_app.reactapp.default_host_name
}

# Output the Static Web App deployment token (sensitive)
output "deployment_token" {
  description = "The deployment token for GitHub Actions"
  value       = azurerm_static_web_app.reactapp.api_key
  sensitive   = true
}
