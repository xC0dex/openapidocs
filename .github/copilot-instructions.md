# GitHub Copilot instructions

## General Context
- This project represents a comprehensive documentation about OpenAPI in .NET
- The reader is a developer
- This project is based on vuepress. Dont forget to update the links accordingly.


## Writing Text

- Never use emojis in any text.
- Use clear, conversational language that builds understanding progressively
- Start with the "what" and "why" before diving into technical details
- Structure content with logical flow: introduction → concepts → implementation → next steps
- Use **bold formatting** for key terms and concepts when first introduced
- Provide concrete examples that relate to the reader's context (.NET developers)
- Use active voice and direct statements ("OpenAPI solves..." not "Problems can be solved by OpenAPI")
- Create smooth transitions between sections that maintain narrative flow
- Focus on practical value and actionable information over theoretical concepts
- Use consistent formatting for code examples, file paths, and technical terms
- Focus on one topic in each file. Split them if needed.

## Structure of the project/documentation

### 1. Introduction
**Goal**: Establish foundational understanding of OpenAPI and its role in .NET applications

#### 1.1 What is OpenAPI?
- History and evolution from Swagger
- OpenAPI Specification overview
- Benefits for API development and documentation
- OpenAPI vs other API documentation formats

#### 1.2 OpenAPI in the .NET Ecosystem
- Native .NET support for OpenAPI
- Integration with ASP.NET Core
- Relationship with Swagger tooling
- Community tools and libraries

### 2. Getting Started
**Goal**: Set up and create your first OpenAPI-enabled .NET application

#### 2.1 Prerequisites
- .NET SDK requirements
- Development environment setup
- Required NuGet packages

#### 2.2 Creating Your First OpenAPI-Enabled API
- Step-by-step project creation
- Basic controller setup
- Viewing generated OpenAPI document
- Testing with Swagger UI

#### 2.3 Understanding the Generated Document
- OpenAPI document structure
- Paths, operations, and responses
- Schema definitions
- Info object and metadata

### 3. OpenAPI Document Generation
**Goal**: Master different approaches to generating OpenAPI documents in .NET

#### 3.1 Generation Approaches Overview
- Code-first vs. contract-first development
- Built-in generators vs. third-party tools
- When to use each approach

#### 3.2 Built-in ASP.NET Core Generator
- Microsoft.AspNetCore.OpenApi
- Configuration and setup
- Default behavior and conventions
- Limitations and considerations

#### 3.3 Swashbuckle.AspNetCore
- Installation and configuration
- SwaggerGen service configuration
- Customizing document generation
- Advanced features and extensions

#### 3.4 NSwag
- Setup and configuration
- Code generation capabilities
- Document generation features
- Integration with build processes

#### 3.5 Other Generators
- Microsoft.AspNetCore.OpenApi alternatives
- Community tools and libraries
- Choosing the right generator for your needs

### 4. Document Customization and Manipulation
**Goal**: Learn to customize and programmatically modify OpenAPI documents

#### 4.1 Core Customization Concepts
- Understanding the OpenAPI object model
- Extension points in generators
- Custom attributes and conventions

#### 4.2 Operation-Level Customization
- **For Each Generator:**
  - Adding operation descriptions and summaries
  - Customizing parameters and request bodies
  - Defining response schemas and examples
  - Adding operation-specific metadata
  - Custom operation filters/processors

#### 4.3 Schema Manipulation
- **For Each Generator:**
  - Custom schema generation
  - Adding examples and descriptions
  - Handling inheritance and polymorphism
  - Enum handling and customization
  - Schema filters and processors

#### 4.4 Document-Level Manipulation
- **For Each Generator:**
  - Modifying document info and metadata
  - Adding servers and contact information
  - Custom document filters
  - Post-processing documents
  - Merging multiple documents

#### 4.5 Advanced Customization Techniques
- Custom converters and serializers
- Dynamic document generation
- Conditional documentation
- Multi-version API documentation

### 5. Authentication and Security
**Goal**: Implement and document API security schemes

#### 5.1 OpenAPI Security Fundamentals
- Security schemes vs. security requirements
- Supported authentication types
- Security at operation vs. document level

#### 5.2 Implementing Security Schemes
- API Key authentication
- Bearer token authentication
- OAuth2 flows
- Basic authentication
- Custom security schemes

#### 5.3 Documenting Security Requirements
- **For Each Generator:**
  - Configuring security schemes
  - Applying security to operations
  - Global vs. operation-specific security
  - Security examples and descriptions

#### 5.4 Advanced Security Scenarios
- Multiple authentication methods
- Conditional security requirements
- Role-based access documentation
- Security testing considerations

### 6. API Documentation Enhancement
**Goal**: Create rich, user-friendly API documentation

#### 6.1 Documentation Best Practices
- Writing effective descriptions
- Providing meaningful examples
- Error response documentation
- Versioning strategies

#### 6.2 Rich Content and Examples
- **For Each Generator:**
  - Adding code examples
  - Request/response samples
  - Interactive examples
  - Media type handling

#### 6.3 Advanced Documentation Features
- Custom extensions and vendor extensions
  - Tags and grouping
- External documentation links
- Deprecation handling

### 7. UI Integration
**Goal**: Integrate and customize API documentation interfaces

<!-- #### 7.1 Swagger UI Integration
- Setup and configuration
- Customizing appearance and behavior
- Authentication integration
- Custom styling and branding

#### 7.2 Scalar UI Integration
- Installation and setup
- Configuration options
- Customization capabilities
- Comparison with Swagger UI

#### 7.3 Alternative UI Solutions
- ReDoc integration
- RapiDoc and other tools
- Custom UI development
- Choosing the right UI for your audience

### 8. Advanced Topics
**Goal**: Handle complex scenarios and enterprise requirements

#### 8.1 Multi-Version API Documentation
- Versioning strategies
- Document generation for multiple versions
- UI considerations for versioned APIs
- Migration documentation

#### 8.2 Microservices and Distributed APIs
- Documenting microservice APIs
- API gateway integration
- Aggregated documentation
- Service discovery integration

#### 8.3 Performance and Optimization
- Document generation performance
- Caching strategies
- Large API optimization
- Build-time vs. runtime generation

#### 8.4 Testing and Validation
- OpenAPI document validation
- Contract testing with generated docs
- Automated testing integration
- Quality assurance practices

### 9. Deployment and Production
**Goal**: Deploy and maintain OpenAPI documentation in production environments

#### 9.1 Deployment Strategies
- Production considerations
- Environment-specific configuration
- Security considerations for public APIs
- CDN and hosting options

#### 9.2 Monitoring and Maintenance
- Documentation drift detection
- Automated validation in CI/CD
- Version management
- Analytics and usage tracking

### 10. Troubleshooting and Best Practices
**Goal**: Solve common issues and follow industry best practices

#### 10.1 Common Issues and Solutions
- Generator-specific troubleshooting
- Performance issues
- Serialization problems
- UI integration issues

#### 10.2 Best Practices Summary
- Documentation standards
- Code organization
- Maintenance strategies
- Team collaboration practices

### 11. Reference and Examples
**Goal**: Provide quick reference and practical examples

#### 11.1 Generator Comparison Matrix
- Feature comparison table
- Performance benchmarks
- Use case recommendations
- Migration guides between generators

#### 11.2 Code Examples Repository
- Complete working examples for each generator
- Common scenarios implementations
- Integration examples
- Best practice demonstrations

#### 11.3 Configuration Reference
- **For Each Generator:**
  - Complete configuration options
  - Default values and behaviors
  - Environment-specific settings
  - Troubleshooting guides
 -->
