# What is OpenAPI?

OpenAPI is a specification for describing REST APIs that provides a standard, language-agnostic way to document your API's endpoints, request/response schemas, authentication methods, and more. Think of it as a contract that clearly defines how your API works.

Originally known as Swagger, OpenAPI has become the industry standard for API documentation. The specification is maintained by the OpenAPI Initiative under the Linux Foundation and is used by millions of developers worldwide.

## Why OpenAPI Matters for .NET Developers

OpenAPI solves common challenges in API development by providing:

**Automatic Documentation** - Generate interactive, always up-to-date documentation directly from your C# code without writing separate docs.

**Compile-Time Safety** - Your OpenAPI specification is generated from your actual C# models and controllers, ensuring accuracy and preventing documentation drift.

**Rich Tooling Ecosystem** - Integrate with testing tools, client generators, and development environments that work seamlessly with ASP.NET Core.

**Team Collaboration** - Provide a single source of truth that frontend developers, testers, and API consumers can rely on.

**Minimal Setup** - Add comprehensive API documentation to existing .NET projects with just a few lines of configuration.

## OpenAPI Evolution and Versions

OpenAPI has evolved significantly over the years:

- **OpenAPI 2.0** (2014): Basic API description capabilities, simple schemas
- **OpenAPI 3.0** (2017): Added complex schemas, improved security schemes, callback support
- **OpenAPI 3.1** (2021): Full JSON Schema compatibility, webhooks, enhanced validation

**What version should you use?** Always use the latest stable version available in your tooling. Currently, OpenAPI 3.1 provides the most comprehensive feature set and better aligns with modern JSON Schema standards. OpenAPI 3.2 is in development and will bring additional improvements to the specification.

## Core OpenAPI Concepts

### The Document Structure

An OpenAPI document is a JSON or YAML file that completely describes your API. Here's what a typical structure looks like:

<details open>
	<summary>OpenAPI Example (YAML)</summary>

@[code yaml](openapi-example.yaml)
</details>

<details>
	<summary>OpenAPI Example (JSON)</summary>

@[code json](openapi-example.json)
</details>

### Paths and Operations

**Paths** represent your API endpoints (like `/api/users/{id}`), while **Operations** define the HTTP methods available on each path:

- `GET /api/users` - Retrieve all users
- `POST /api/users` - Create a new user
- `GET /api/users/{id}` - Get a specific user
- `PUT /api/users/{id}` - Update a user
- `DELETE /api/users/{id}` - Delete a user

### Schemas and Components

**Schemas** define the structure of your data using JSON Schema. In .NET, these typically correspond to your C# models:

```csharp
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
}
```

**Components** are reusable elements like schemas, parameters, and responses that prevent duplication across your specification.

### Parameters and Content Types

OpenAPI documents all the ways data flows into and out of your API:

- **Path parameters**: Values in the URL path (`/users/{id}`)
- **Query parameters**: URL query strings (`/users?page=1&limit=10`)
- **Headers**: HTTP headers for metadata
- **Request bodies**: JSON, XML, or form data sent in requests
- **Content types**: Specify formats your API accepts and returns

## Data Validation and Types

OpenAPI provides comprehensive validation capabilities that map well to .NET's type system:

### Basic Data Types
- **string**: Maps to C# `string`, with format validation (email, uri, date)
- **number**: Maps to C# `decimal`, `double`, with range validation
- **integer**: Maps to C# `int`, `long`, with range validation
- **boolean**: Maps to C# `bool`
- **array**: Maps to C# collections and lists
- **object**: Maps to C# classes and records

### Validation Rules
- **String validation**: Length limits, regex patterns, format checking
- **Numeric validation**: Min/max values, multiple constraints
- **Array validation**: Item count limits, uniqueness requirements
- **Object validation**: Required properties, additional property handling

### Advanced Schema Features
- **Inheritance**: Use `allOf`, `oneOf`, `anyOf` for complex type relationships
- **Polymorphism**: Handle different object types with discriminators
- **Conditional logic**: Apply validation rules based on other field values
- **References**: Reuse schema definitions to keep your spec clean

## Security and Authentication

OpenAPI supports all common authentication patterns used in .NET applications:

### API Keys
```yaml
securitySchemes:
  ApiKeyAuth:
    type: apiKey
    in: header
    name: X-API-Key
```

### JWT Bearer Tokens
```yaml
securitySchemes:
  BearerAuth:
    type: http
    scheme: bearer
    bearerFormat: JWT
```

### OAuth 2.0 and OpenID Connect
```yaml
securitySchemes:
  OAuth2:
    type: oauth2
    flows:
      authorizationCode:
        authorizationUrl: https://example.com/oauth/authorize
        tokenUrl: https://example.com/oauth/token
        scopes:
          read: Read access
          write: Write access
```

## OpenAPI vs. Swagger: Understanding the Ecosystem

It's important to understand the relationship between OpenAPI and Swagger:

- **OpenAPI** is the specification (the standard that defines how to describe APIs)
- **Swagger** is a collection of tools that work with OpenAPI documents

In the .NET ecosystem, you'll encounter:
- **OpenAPI generators** that create specifications from your C# code
- **Scalar and other UI tools** for rendering interactive documentation
- **OpenAPI documents** (the JSON/YAML files) that describe your API

## Practical Applications

### Interactive Documentation
Replace static API documentation with live, interactive docs that developers can test directly in their browser.

### Client Code Generation
Automatically generate strongly-typed client libraries for TypeScript, C#, Python, Java, and other languages.

### API Testing and Validation
Use your OpenAPI specification to validate requests and responses, generate test cases, and ensure API compliance.

### Development Workflow Integration
Integrate OpenAPI generation into your CI/CD pipeline to catch breaking changes and maintain documentation quality.

### API Governance
Establish consistency across multiple APIs in your organization by standardizing on OpenAPI practices.

## What's Next?

Now that you understand what OpenAPI is and why it matters, you're ready to start implementing it in your .NET projects. The following sections will guide you through:

- Setting up OpenAPI generation in ASP.NET Core
- Configuring documentation generation from your C# code
- Customizing the generated specification for your specific needs
- Best practices for maintaining high-quality API documentation

The best part? You won't need to write OpenAPI specifications by hand. Modern .NET tooling can automatically generate accurate, comprehensive OpenAPI documents directly from your existing C# code.
