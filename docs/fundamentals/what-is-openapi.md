# What is OpenAPI?

OpenAPI (formerly known as Swagger) is a specification for describing REST APIs. It provides a standard way to document your API's endpoints, request/response schemas, authentication methods, and more.

## Why OpenAPI Matters

### 📚 **Automatic Documentation**

Generate interactive documentation that's always up-to-date with your code.

### 🔧 **Tooling Integration**

Integrate with tools for testing, client generation, and API development.

### 🤝 **Team Collaboration**

Provide a single source of truth for frontend developers, testers, and API consumers.

### ✅ **Validation & Testing**

Validate requests/responses and generate test cases automagically.

## OpenAPI Document Structure

An OpenAPI document is a JSON or YAML file that describes your API:

<details open>
	<summary>OpenAPI Example (YAML)</summary>

@[code yaml](openapi-example.yaml)
</details>

<details>
	<summary>OpenAPI Example (JSON)</summary>

@[code json](openapi-example.json)
</details>

## Key Benefits in .NET

### **Compile-Time Safety**

Your OpenAPI documentation is generated from your C# code, ensuring it's always accurate.

### **Rich Ecosystem**

Choose from multiple generators and UI tools that integrate seamlessly with ASP.NET Core.

### **Minimal Code Changes**

Add OpenAPI to existing projects with minimal modifications.

### **Performance**

Modern generators are optimized for production use with minimal overhead.

## OpenAPI vs. Swagger

**OpenAPI** is the specification (the standard).  
**Swagger** is a set of tools that work with OpenAPI documents.

In .NET, you'll work with:

- **OpenAPI generators** (create the specification from your code)
- **Scalar API Reference** (renders interactive documentation)
- **OpenAPI documents** (the JSON/YAML files describing your API)

## Common Use Cases

### **API Documentation**

Replace static documentation with interactive, always-current docs.

### **Client Generation**

Generate TypeScript, C#, Python, or other client libraries automatically.

### **API Testing**

Use tools or custom test suites with your OpenAPI spec.

### **API Governance**

Ensure consistency across multiple APIs in your organization.
