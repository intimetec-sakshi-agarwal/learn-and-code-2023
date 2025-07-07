# Share-PHI Application: Send and Scan Functionality

## Overview
This UML diagram represents a comprehensive healthcare information sharing system that combines message sending and EHR scanning capabilities into a unified workflow.

## Key Components

### 1. Release Details Package
- **Release Type**: Defines the type of information release
- **From Address**: Source address for message sending
- **To Address**: Destination address for message delivery
- **Input To**: Integration with search directory functionality

### 2. Patient Management Package
- **Patient Search**: Core search functionality with multiple field options
  - First Name, Last Name, DOB, ID search criteria
  - Search Visit capability
  - Real-time validation
- **Patient Information**: Comprehensive patient data management
- **Patient Details**: Detailed patient record access
- **Search Patient**: Advanced patient lookup
- **Search Directory**: Directory integration for address lookup

### 3. Document Management Package
- **Document Attachments**: Central document handling system
- **Document Metadata**:
  - Document Type classification
  - Document Date management
  - Confidentiality settings
  - Reviewer assignments
  - Content Group categorization
- **CRUD Operations**:
  - Add Attachment
  - Update Attachment
  - Delete Attachment
- **Scan Document**: Document digitization capability

### 4. Summary and Actions Package
- **Summary**: Comprehensive overview of all operations
  - Attachment summary details
  - Action management
  - Status tracking
- **Combined Functionality**:
  - **Send Message**: Traditional message sending
  - **Scan to EHR**: EHR integration and scanning
  - **Send and Upload**: **Primary Innovation** - Combined operation that simultaneously:
    - Sends messages
    - Uploads documents
    - Scans to EHR
    - Manages attachments

## Key Features

### Combined Send and Scan Functionality
The central innovation of this system is the "Send and Upload" component that unifies:
- Message transmission
- Document upload
- EHR scanning
- Attachment management

### Field Search Functionality
- Multiple search criteria support
- Real-time validation
- Cross-referential patient lookup
- Directory integration

### Full Document Lifecycle Management
- Complete CRUD operations for attachments
- Document type classification
- Date and metadata management
- Confidentiality and security controls

### Comprehensive Summary System
- Real-time status tracking
- Attachment detail management
- Action history and audit trail

## Workflow Integration
The diagram shows how all components work together to provide a seamless experience where users can:
1. Search and select patients
2. Manage document attachments
3. Configure release details
4. Execute combined send/scan operations
5. Monitor progress through comprehensive summaries

## Technical Benefits
- **Unified Operation**: Single action performs multiple tasks
- **Data Integrity**: Consistent handling across all operations
- **Audit Trail**: Complete tracking of all activities
- **Scalability**: Modular design supports future enhancements
- **Security**: Built-in confidentiality and access controls