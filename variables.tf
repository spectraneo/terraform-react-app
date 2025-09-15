# Azure subscription and authentication variables
variable "subscription_id" {
  description = "Azure subscription ID"
  type        = string
  default     = null
}

variable "tenant_id" {
  description = "Azure tenant ID"
  type        = string
  default     = null
}

variable "client_id" {
  description = "Azure service principal client ID"
  type        = string
  default     = null
}

variable "client_secret" {
  description = "Azure service principal client secret"
  type        = string
  sensitive   = true
  default     = null
}

# Project configuration variables
variable "resource_group_name" {
  description = "Name of the Azure resource group"
  type        = string
  default     = "rg-terraform-react"
}

variable "location" {
  description = "Azure region for resources"
  type        = string
  default     = "West Europe"
}

variable "app_name_prefix" {
  description = "Prefix for the static web app name"
  type        = string
  default     = "terraform-react-app"
}

variable "environment" {
  description = "Environment (dev, staging, prod)"
  type        = string
  default     = "dev"
}
