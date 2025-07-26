export interface Question {
  stage: string
  question: string
  painPoint: string
  options: Array<{
    text: string
    score: number
    timeImpact: string
    description: string
  }>
}

export const questions: Record<"ja" | "en", Question[]> = {
  ja: [
    // Planning Stage (3 questions)
    {
      stage: "planning",
      painPoint: "Requirements Management and Traceability Maturity",
      question: "What aspect of requirements management most challenges your organization's maturity and affects project success rates?",
      options: [
        {
          text: "Requirements management processes are undefined with difficult stakeholder consensus formation",
          score: 1,
          timeImpact: "15-30 hours per week on stakeholder coordination",
          description: "No requirements traceability matrix exists, preventing change impact analysis (CMMI Level 1)",
        },
        {
          text: "Basic requirements management tools exist but change management processes are not standardized",
          score: 2,
          timeImpact: "10-20 hours per week on requirements change response",
          description: "Requirements tracking is possible but change approval processes and impact analysis are person-dependent (CMMI Level 2)",
        },
        {
          text: "Standardized requirements management processes exist but metrics measurement and analysis insufficient",
          score: 3,
          timeImpact: "5-15 hours per week on requirements quality analysis",
          description: "IEEE 830-compliant requirements definition possible but requirements quality metrics measurement lacking (CMMI Level 3)",
        },
        {
          text: "Data-driven requirements management with automation from analysis to risk prediction",
          score: 4,
          timeImpact: "10-25 hours per week efficiency through automation",
          description: "AI-powered requirements analysis, automated conflict detection, risk-based prioritization implemented (CMMI Level 4-5)",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "Project Estimation and Resource Planning",
      question: "What element is the most difficult to predict in project estimation and causes planning errors?",
      options: [
        {
          text: "Uncertainty in technology learning costs and team capability assessment",
          score: 1,
          timeImpact: "50-100% deviation from actual results",
          description: "Unknown team technical proficiency and learning time underestimation combined with resource misallocation",
        },
        {
          text: "Legacy system integration complexity and dependency management",
          score: 2,
          timeImpact: "30-50% deviation from actual results",
          description: "Unknown legacy specifications and external system dependencies cause unexpected constraints and delays",
        },
        {
          text: "Testing and quality assurance effort underestimation with insufficient historical data",
          score: 3,
          timeImpact: "20-30% deviation from actual results",
          description: "Focus on development effort while underestimating QA activities and lack of reference data",
        },
        {
          text: "AI-powered estimation with comprehensive historical data analysis",
          score: 4,
          timeImpact: "5-15% deviation from actual results",
          description: "Machine learning models using past project data for accurate estimation with risk-based adjustments",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "Risk Management and Progress Visibility",
      question: "What is the most difficult challenge in project risk management and progress tracking?",
      options: [
        {
          text: "Technical feasibility uncertainty and progress reporting accuracy issues",
          score: 1,
          timeImpact: "2-8 weeks delay when risks materialize",
          description: "Unknown technical constraints combined with inaccurate progress reports (80% reported vs 50% actual)",
        },
        {
          text: "External dependencies and task interdependency complexity",
          score: 2,
          timeImpact: "1-4 weeks delay for coordination and impact analysis",
          description: "External API changes and vendor delays with complex task dependencies making impact analysis difficult",
        },
        {
          text: "Communication gaps and detailed progress granularity issues",
          score: 3,
          timeImpact: "1-2 weeks to discover problems",
          description: "Team members not reporting issues and coarse-grained progress reports missing daily problems",
        },
        {
          text: "Automated risk detection with predictive analytics and real-time progress tracking",
          score: 4,
          timeImpact: "Early detection preventing 1-2 weeks delay",
          description: "AI-powered risk monitoring with automated issue detection and real-time progress visibility",
        },
      ],
    },

    // Analysis Stage (3 questions)
    {
      stage: "analysis",
      painPoint: "Business Process Understanding and System Integration",
      question: "What is the most challenging aspect of analyzing current operations and designing system integration?",
      options: [
        {
          text: "Undocumented processes, tacit knowledge, and unknown legacy system specifications",
          score: 1,
          timeImpact: "20-40 hours per operation for investigation and specification discovery",
          description: "Many undocumented procedures exist with unknown legacy system specifications making integration complex",
        },
        {
          text: "Inconsistent procedures across teams and data format unification challenges",
          score: 2,
          timeImpact: "15-25 hours per operation for standardization and data mapping",
          description: "Procedures vary between teams while data formats and definitions lack standardization across systems",
        },
        {
          text: "Complex business flows and system interdependencies requiring coordination",
          score: 3,
          timeImpact: "10-20 hours per operation for visualization and dependency analysis",
          description: "Multi-department approval flows and complex system communication patterns require detailed mapping",
        },
        {
          text: "Automated process discovery and integration mapping with stakeholder coordination tools",
          score: 4,
          timeImpact: "5-10 hours per operation with automated analysis and coordination",
          description: "AI-powered process analysis with automated system integration mapping and stakeholder scheduling",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "Technology Selection and Architecture Design",
      question: "What is the most difficult decision in system architecture design and technology selection?",
      options: [
        {
          text: "Balancing new technology adoption risks with legacy system limitations and performance requirements",
          score: 1,
          timeImpact: "25-50 hours for comprehensive technology evaluation and performance design",
          description: "New technologies attractive but uncertain stability while legacy constraints limit performance options",
        },
        {
          text: "Optimizing performance vs development complexity while ensuring security and convenience",
          score: 2,
          timeImpact: "20-35 hours for balanced architecture design across multiple requirements",
          description: "High performance increases complexity while strong security can reduce usability and development efficiency",
        },
        {
          text: "Designing for future scalability while managing current costs and development timeline",
          score: 3,
          timeImpact: "15-25 hours for scalability consideration and cost optimization",
          description: "Future-proof designs increase current costs while tight budgets limit architectural flexibility",
        },
        {
          text: "AI-assisted architecture recommendation with automated technology matching and cost optimization",
          score: 4,
          timeImpact: "5-15 hours with intelligent recommendations and automated analysis",
          description: "Intelligent architecture suggestions based on requirements, constraints, and automated cost-benefit analysis",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "Data Model Design and Multi-System Data Integration",
      question: "What is the most complex challenge in data design that affects system operations and integration?",
      options: [
        {
          text: "Poor existing data quality requiring complex migration with multi-system integrity challenges",
          score: 1,
          timeImpact: "30-50 hours for data migration design and multi-system integrity planning",
          description: "Duplicate, inconsistent, missing data combined with complex synchronization requirements across systems",
        },
        {
          text: "Balancing normalization, performance optimization, and cross-system data consistency",
          score: 2,
          timeImpact: "20-35 hours for optimal database design across performance and integrity requirements",
          description: "Data integrity impacts performance while denormalization complicates maintenance and cross-system consistency",
        },
        {
          text: "Designing flexible data structures for future business changes with real-time integration requirements",
          score: 3,
          timeImpact: "15-25 hours for flexible design with performance consideration",
          description: "Business changes require structural modifications while real-time integration affects performance optimization",
        },
        {
          text: "Automated data modeling with intelligent migration planning and performance optimization",
          score: 4,
          timeImpact: "8-15 hours with AI-powered data design and automated optimization",
          description: "AI-powered data model generation, automated migration strategies, and intelligent performance tuning",
        },
      ],
    },

    // Development Stage (3 questions)
    {
      stage: "development",
      painPoint: "Code Quality Management and Testing Strategy",
      question: "What is the biggest challenge in maintaining consistent code quality and implementing comprehensive testing?",
      options: [
        {
          text: "Varying skill levels among team members with complex business logic testing requirements",
          score: 1,
          timeImpact: "30-50 hours per week for quality assurance and test case creation",
          description: "Mixed experience levels require extensive mentoring while complex business rules need comprehensive manual test design",
        },
        {
          text: "Insufficient time for thorough code reviews and test environment setup challenges",
          score: 2,
          timeImpact: "20-35 hours per week on quality control and environment management",
          description: "Schedule pressure leads to rushed reviews while complex test environments require significant setup and maintenance",
        },
        {
          text: "Lack of automated quality enforcement with manual regression testing overhead",
          score: 3,
          timeImpact: "15-25 hours per week on manual quality checks and test execution",
          description: "Manual quality checks miss automated detectable issues while regression tests require time-consuming manual execution",
        },
        {
          text: "AI-powered code review and automated test generation with execution platform",
          score: 4,
          timeImpact: "5-10 hours per week with intelligent automation",
          description: "Automated detection of code issues, security vulnerabilities, and AI-generated test cases with automated execution",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "Integration Complexity and Debugging Challenges",
      question: "What causes the most delays in system integration and troubleshooting activities?",
      options: [
        {
          text: "Incompatible data formats with difficult-to-reproduce bugs and insufficient logging",
          score: 1,
          timeImpact: "4-8 weeks per integration plus 5-20 hours per bug investigation",
          description: "Extensive data transformation required while bugs occur under specific conditions with inadequate log information",
        },
        {
          text: "Unreliable third-party APIs with complex multi-system debugging challenges",
          score: 2,
          timeImpact: "2-4 weeks per integration plus 3-12 hours per multi-system issue",
          description: "Trial-and-error API integration while isolating problems across interconnected systems proves time-consuming",
        },
        {
          text: "Complex security requirements with production environment-specific issues",
          score: 3,
          timeImpact: "1-3 weeks per integration plus 2-8 hours per environment-specific investigation",
          description: "Secure communication protocols implementation while production-specific problems cannot be reproduced in development",
        },
        {
          text: "Intelligent integration platform with automated debugging and enhanced monitoring",
          score: 4,
          timeImpact: "3-5 days per integration plus 15-30 minutes per issue investigation",
          description: "Pre-built connectors with automated data mapping plus AI-powered root cause analysis and comprehensive logging",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "CI/CD and Release Management Complexity",
      question: "What is the most challenging aspect of continuous integration and deployment that affects release quality?",
      options: [
        {
          text: "Managing environment configuration differences with manual build failure analysis",
          score: 1,
          timeImpact: "10-20 hours per week on environment management plus 2-8 hours per build failure",
          description: "Settings differ between environments causing unexpected problems while build/test failures require manual investigation",
        },
        {
          text: "Insufficient post-deployment verification with complex emergency rollback procedures",
          score: 2,
          timeImpact: "5-15 hours of rework per week plus 1-4 hours per emergency response",
          description: "Perfunctory deployment confirmation leads to late problem discovery while rollback procedures are complex during emergencies",
        },
        {
          text: "Technical debt accumulation affecting new development with standardized deployment processes",
          score: 3,
          timeImpact: "5-10 hours per week addressing debt plus 2-4 hours per standard deployment",
          description: "Past compromise implementations accumulate making new features difficult while deployments follow established procedures",
        },
        {
          text: "Automated CI/CD pipeline with intelligent deployment orchestration and self-healing systems",
          score: 4,
          timeImpact: "15-30 minutes per release with automated failure recovery",
          description: "Fully automated deployment process with built-in safety checks, automatic rollback, and intelligent failure detection",
        },
      ],
    },

    // Testing Stage (3 questions)
    {
      stage: "testing",
      painPoint: "Test Coverage Optimization and Performance Testing",
      question: "What is the biggest challenge in achieving comprehensive test coverage and effective performance testing?",
      options: [
        {
          text: "Identifying all edge cases with complex realistic load scenario creation",
          score: 1,
          timeImpact: "40-70 hours per application for comprehensive test design and performance scenario creation",
          description: "Manual analysis required for all failure scenarios while creating realistic production-like load patterns proves complex",
        },
        {
          text: "Balancing test coverage with time constraints and performance bottleneck identification",
          score: 2,
          timeImpact: "25-40 hours per application for coverage optimization and performance analysis",
          description: "Prioritization decisions between thorough testing and delivery deadlines while manual performance analysis across components",
        },
        {
          text: "Maintaining test cases as requirements evolve with performance issue correlation to code changes",
          score: 3,
          timeImpact: "15-25 hours per application for test maintenance and performance investigation",
          description: "Continuous updates to test suites as functionality changes while investigating performance degradation causes",
        },
        {
          text: "AI-driven test generation with automated performance testing and analysis platform",
          score: 4,
          timeImpact: "5-10 hours per application with intelligent automation",
          description: "Automated test scenario identification and intelligent test case creation with AI-powered performance analysis and bottleneck detection",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "User Acceptance Testing Coordination and Quality Assurance",
      question: "What is the most challenging aspect of managing user acceptance testing and ensuring quality standards?",
      options: [
        {
          text: "Coordinating busy stakeholder schedules with extensive user training requirements",
          score: 1,
          timeImpact: "3-6 weeks coordination time plus 1-2 weeks training time",
          description: "Extensive back-and-forth communication for testing schedules while comprehensive user training required before effective testing",
        },
        {
          text: "Collecting and prioritizing diverse user feedback with complex defect triage processes",
          score: 2,
          timeImpact: "2-3 weeks feedback analysis plus additional time for defect prioritization",
          description: "Manual consolidation of diverse user feedback while determining critical vs minor issues for resolution priority",
        },
        {
          text: "Managing testing environments and user access with standardized feedback collection",
          score: 3,
          timeImpact: "1-2 weeks environment setup plus structured feedback collection time",
          description: "Complex test environment provisioning and user access management while implementing organized feedback collection methods",
        },
        {
          text: "Digital UAT platform with automated feedback collection and intelligent user coordination",
          score: 4,
          timeImpact: "2-3 days coordination time with automated analysis",
          description: "Streamlined user testing platform with automated feedback aggregation, analysis, and intelligent stakeholder coordination",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "Test Data Management and Automation Strategy",
      question: "What is the most time-consuming aspect of test data management and test automation implementation?",
      options: [
        {
          text: "Creating and maintaining complex test data sets with manual test execution overhead",
          score: 1,
          timeImpact: "3-8 hours per week for data preparation plus 40-60% of time on manual test execution",
          description: "Time-consuming test data creation for various scenarios while manual test suite execution slows development pace",
        },
        {
          text: "Test data synchronization across environments with selective test automation implementation",
          score: 2,
          timeImpact: "2-5 hours per week for data management plus partial automation maintenance",
          description: "Complex data synchronization between development, staging, and production environments while maintaining hybrid automation",
        },
        {
          text: "Automated test data generation with comprehensive test suite automation",
          score: 3,
          timeImpact: "1-3 hours per week for data generation oversight plus automated test maintenance",
          description: "Automated test data creation processes while maintaining comprehensive automated test suite execution",
        },
        {
          text: "AI-powered test data synthesis with intelligent test automation platform",
          score: 4,
          timeImpact: "30 minutes per week with intelligent automation management",
          description: "AI-generated realistic test data with intelligent test automation that adapts to application changes automatically",
        },
      ],
    },

    // Deployment Stage (3 questions)
    {
      stage: "deployment",
      painPoint: "Release Management and Environment Configuration",
      question: "What is the most challenging aspect of managing software releases and environment consistency?",
      options: [
        {
          text: "Coordinating deployments across multiple environments with complex configuration management",
          score: 1,
          timeImpact: "1-2 days per release plus 2-6 hours per environment configuration",
          description: "Manual coordination and verification across environments while configuration differences cause environment-specific issues",
        },
        {
          text: "Managing database schema changes with dependency version conflicts",
          score: 2,
          timeImpact: "4-8 hours per release plus 1-4 hours per dependency conflict resolution",
          description: "Complex database updates requiring careful planning while resolving conflicts between different library versions",
        },
        {
          text: "Ensuring zero-downtime deployments with infrastructure provisioning challenges",
          score: 3,
          timeImpact: "2-4 hours per release plus 1-2 hours per infrastructure setup",
          description: "Implementation of blue-green deployment strategies while manual infrastructure setup and capacity planning",
        },
        {
          text: "Automated CI/CD pipeline with Infrastructure as Code and intelligent deployment orchestration",
          score: 4,
          timeImpact: "15-30 minutes per release with automated infrastructure provisioning",
          description: "Fully automated deployment process with version-controlled infrastructure and intelligent environment provisioning",
        },
      ],
    },
    {
      stage: "deployment",
      painPoint: "Rollback Procedures and Failure Recovery",
      question: "What is the most time-consuming aspect of handling deployment failures and emergency recovery?",
      options: [
        {
          text: "Identifying deployment failure root causes with manual investigation processes",
          score: 1,
          timeImpact: "2-8 hours per incident for root cause analysis and manual recovery procedures",
          description: "Manual investigation across logs, metrics, and system components while executing complex rollback procedures safely",
        },
        {
          text: "Coordinating emergency response with stakeholder communication during incidents",
          score: 2,
          timeImpact: "1-4 hours per incident for coordination and communication management",
          description: "Careful rollback execution while maintaining data integrity and providing manual updates to stakeholder groups",
        },
        {
          text: "Automated rollback procedures with systematic incident response protocols",
          score: 3,
          timeImpact: "30 minutes-2 hours per incident with structured response procedures",
          description: "Established rollback procedures with systematic incident response while coordinating with defined stakeholder communication protocols",
        },
        {
          text: "Automated failure detection with self-healing systems and intelligent stakeholder notification",
          score: 4,
          timeImpact: "5-15 minutes per incident with automated recovery",
          description: "Intelligent monitoring with automatic rollback, self-healing capabilities, and automated stakeholder notification systems",
        },
      ],
    },
    {
      stage: "deployment",
      painPoint: "Security and Compliance in Deployment Pipeline",
      question: "What is the most complex challenge in maintaining security and compliance throughout the deployment process?",
      options: [
        {
          text: "Manual security scanning with complex compliance verification across environments",
          score: 1,
          timeImpact: "4-8 hours per release for security assessment and compliance verification",
          description: "Manual security assessments and vulnerability discovery while complex compliance checks across multiple environments",
        },
        {
          text: "Automated security scanning with standardized compliance workflows",
          score: 2,
          timeImpact: "2-4 hours per release for compliance workflow execution and security review",
          description: "Automated vulnerability scanning with established compliance procedures while maintaining security review processes",
        },
        {
          text: "Integrated security pipeline with automated compliance monitoring",
          score: 3,
          timeImpact: "1-2 hours per release for security pipeline oversight and compliance monitoring",
          description: "Security integrated into CI/CD pipeline with automated compliance monitoring and standardized security procedures",
        },
        {
          text: "AI-powered security analysis with intelligent compliance automation and risk assessment",
          score: 4,
          timeImpact: "15-30 minutes per release with intelligent security automation",
          description: "AI-powered security vulnerability detection with automated compliance verification and intelligent risk scoring systems",
        },
      ],
    },

    // Maintenance Stage (3 questions)
    {
      stage: "maintenance",
      painPoint: "System Monitoring and Incident Response",
      question: "What is the biggest challenge in monitoring system health and managing incident response?",
      options: [
        {
          text: "Alert fatigue from false positives with manual incident investigation and limited system visibility",
          score: 1,
          timeImpact: "2-4 hours daily on alert triage plus 1-3 hours per incident investigation",
          description: "Overwhelming alerts making real issue identification difficult while lack of system dependency visibility complicates incident resolution",
        },
        {
          text: "Manual metric correlation across multiple tools with time-consuming root cause analysis",
          score: 2,
          timeImpact: "1-3 hours per incident for data aggregation and 1-2 hours for correlation analysis",
          description: "Time spent aggregating data from multiple monitoring platforms while manually correlating metrics for root cause analysis",
        },
        {
          text: "Integrated monitoring platform with structured incident response but manual correlation processes",
          score: 3,
          timeImpact: "1-2 hours per incident with structured but manual analysis processes",
          description: "Unified monitoring platform with established incident procedures while manual correlation and analysis still required",
        },
        {
          text: "AI-powered intelligent monitoring with predictive alerting and automated root cause analysis",
          score: 4,
          timeImpact: "15-30 minutes per incident with intelligent automation",
          description: "Smart alerts with automatic root cause analysis, suggested remediation, and predictive issue detection capabilities",
        },
      ],
    },
    {
      stage: "maintenance",
      painPoint: "Technical Debt Management and Performance Optimization",
      question: "What is the most challenging aspect of managing technical debt while maintaining system performance?",
      options: [
        {
          text: "Identifying and quantifying technical debt with manual performance optimization across the codebase",
          score: 1,
          timeImpact: "1-2 weeks per assessment plus 20-30% slower feature delivery due to debt impact",
          description: "Manual code review and analysis to identify refactoring areas while performance issues require manual investigation and optimization",
        },
        {
          text: "Prioritizing debt against new features with systematic performance monitoring but manual optimization",
          score: 2,
          timeImpact: "50-100% estimation variance for debt work plus systematic performance analysis time",
          description: "Difficult trade-offs between addressing debt and delivering new functionality while performance monitoring is systematic but optimization manual",
        },
        {
          text: "Systematic debt tracking with automated performance monitoring and structured remediation planning",
          score: 3,
          timeImpact: "Structured debt assessment with performance baseline monitoring and planned remediation cycles",
          description: "Organized debt tracking with automated performance monitoring while remediation efforts are planned and systematically executed",
        },
        {
          text: "Automated technical debt detection with AI-powered performance optimization and intelligent remediation planning",
          score: 4,
          timeImpact: "1-2 days per assessment with intelligent optimization and automated remediation suggestions",
          description: "AI-powered code analysis with prioritized remediation recommendations, automated performance optimization, and intelligent debt management",
        },
      ],
    },
    {
      stage: "maintenance",
      painPoint: "Security Vulnerability Management and System Updates",
      question: "What is the most time-consuming aspect of managing security vulnerabilities and system maintenance?",
      options: [
        {
          text: "Manual vulnerability scanning with complex risk assessment and coordination across multiple systems",
          score: 1,
          timeImpact: "1-2 weeks per comprehensive scan plus 4-8 hours per vulnerability assessment and 2-4 hours per patch cycle",
          description: "Manual security assessments and vulnerability discovery while risk analysis and patch coordination across systems requires significant time",
        },
        {
          text: "Automated vulnerability scanning with manual risk assessment and systematic patch management",
          score: 2,
          timeImpact: "Regular automated scanning plus 2-4 hours per vulnerability analysis and structured patch deployment",
          description: "Automated vulnerability detection while manual analysis of severity and business impact plus systematic patch management procedures",
        },
        {
          text: "Integrated security monitoring with automated risk scoring and coordinated patch management",
          score: 3,
          timeImpact: "Continuous monitoring with automated risk assessment and 1-2 hours per patch cycle coordination",
          description: "Automated security monitoring with risk scoring while patch management follows established coordination procedures across systems",
        },
        {
          text: "AI-powered continuous security monitoring with intelligent risk assessment and automated patch management",
          score: 4,
          timeImpact: "30 minutes per vulnerability with intelligent automation and automated patch deployment",
          description: "Continuous AI-powered security monitoring with automated risk scoring, intelligent patch prioritization, and automated deployment systems",
        },
      ],
    },
  ],
  en: [
    // Planning Stage (3 questions)
    {
      stage: "planning",
      painPoint: "Requirements Management and Traceability Maturity",
      question: "What aspect of requirements management most challenges your organization's maturity and affects project success rates?",
      options: [
        {
          text: "Requirements management processes are undefined with difficult stakeholder consensus formation",
          score: 1,
          timeImpact: "15-30 hours per week on stakeholder coordination",
          description: "No requirements traceability matrix exists, preventing change impact analysis (CMMI Level 1)",
        },
        {
          text: "Basic requirements management tools exist but change management processes are not standardized",
          score: 2,
          timeImpact: "10-20 hours per week on requirements change response",
          description: "Requirements tracking is possible but change approval processes and impact analysis are person-dependent (CMMI Level 2)",
        },
        {
          text: "Standardized requirements management processes exist but metrics measurement and analysis insufficient",
          score: 3,
          timeImpact: "5-15 hours per week on requirements quality analysis",
          description: "IEEE 830-compliant requirements definition possible but requirements quality metrics measurement lacking (CMMI Level 3)",
        },
        {
          text: "Data-driven requirements management with automation from analysis to risk prediction",
          score: 4,
          timeImpact: "10-25 hours per week efficiency through automation",
          description: "AI-powered requirements analysis, automated conflict detection, risk-based prioritization implemented (CMMI Level 4-5)",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "Project Estimation and Resource Planning",
      question: "What element is the most difficult to predict in project estimation and causes planning errors?",
      options: [
        {
          text: "Uncertainty in technology learning costs and team capability assessment",
          score: 1,
          timeImpact: "50-100% deviation from actual results",
          description: "Unknown team technical proficiency and learning time underestimation combined with resource misallocation",
        },
        {
          text: "Legacy system integration complexity and dependency management",
          score: 2,
          timeImpact: "30-50% deviation from actual results",
          description: "Unknown legacy specifications and external system dependencies cause unexpected constraints and delays",
        },
        {
          text: "Testing and quality assurance effort underestimation with insufficient historical data",
          score: 3,
          timeImpact: "20-30% deviation from actual results",
          description: "Focus on development effort while underestimating QA activities and lack of reference data",
        },
        {
          text: "AI-powered estimation with comprehensive historical data analysis",
          score: 4,
          timeImpact: "5-15% deviation from actual results",
          description: "Machine learning models using past project data for accurate estimation with risk-based adjustments",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "Risk Management and Progress Visibility",
      question: "What is the most difficult challenge in project risk management and progress tracking?",
      options: [
        {
          text: "Technical feasibility uncertainty and progress reporting accuracy issues",
          score: 1,
          timeImpact: "2-8 weeks delay when risks materialize",
          description: "Unknown technical constraints combined with inaccurate progress reports (80% reported vs 50% actual)",
        },
        {
          text: "External dependencies and task interdependency complexity",
          score: 2,
          timeImpact: "1-4 weeks delay for coordination and impact analysis",
          description: "External API changes and vendor delays with complex task dependencies making impact analysis difficult",
        },
        {
          text: "Communication gaps and detailed progress granularity issues",
          score: 3,
          timeImpact: "1-2 weeks to discover problems",
          description: "Team members not reporting issues and coarse-grained progress reports missing daily problems",
        },
        {
          text: "Automated risk detection with predictive analytics and real-time progress tracking",
          score: 4,
          timeImpact: "Early detection preventing 1-2 weeks delay",
          description: "AI-powered risk monitoring with automated issue detection and real-time progress visibility",
        },
      ],
    },

    // Analysis Stage (3 questions)
    {
      stage: "analysis",
      painPoint: "Business Process Understanding and System Integration",
      question: "What is the most challenging aspect of analyzing current operations and designing system integration?",
      options: [
        {
          text: "Undocumented processes, tacit knowledge, and unknown legacy system specifications",
          score: 1,
          timeImpact: "20-40 hours per operation for investigation and specification discovery",
          description: "Many undocumented procedures exist with unknown legacy system specifications making integration complex",
        },
        {
          text: "Inconsistent procedures across teams and data format unification challenges",
          score: 2,
          timeImpact: "15-25 hours per operation for standardization and data mapping",
          description: "Procedures vary between teams while data formats and definitions lack standardization across systems",
        },
        {
          text: "Complex business flows and system interdependencies requiring coordination",
          score: 3,
          timeImpact: "10-20 hours per operation for visualization and dependency analysis",
          description: "Multi-department approval flows and complex system communication patterns require detailed mapping",
        },
        {
          text: "Automated process discovery and integration mapping with stakeholder coordination tools",
          score: 4,
          timeImpact: "5-10 hours per operation with automated analysis and coordination",
          description: "AI-powered process analysis with automated system integration mapping and stakeholder scheduling",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "Technology Selection and Architecture Design",
      question: "What is the most difficult decision in system architecture design and technology selection?",
      options: [
        {
          text: "Balancing new technology adoption risks with legacy system limitations and performance requirements",
          score: 1,
          timeImpact: "25-50 hours for comprehensive technology evaluation and performance design",
          description: "New technologies attractive but uncertain stability while legacy constraints limit performance options",
        },
        {
          text: "Optimizing performance vs development complexity while ensuring security and convenience",
          score: 2,
          timeImpact: "20-35 hours for balanced architecture design across multiple requirements",
          description: "High performance increases complexity while strong security can reduce usability and development efficiency",
        },
        {
          text: "Designing for future scalability while managing current costs and development timeline",
          score: 3,
          timeImpact: "15-25 hours for scalability consideration and cost optimization",
          description: "Future-proof designs increase current costs while tight budgets limit architectural flexibility",
        },
        {
          text: "AI-assisted architecture recommendation with automated technology matching and cost optimization",
          score: 4,
          timeImpact: "5-15 hours with intelligent recommendations and automated analysis",
          description: "Intelligent architecture suggestions based on requirements, constraints, and automated cost-benefit analysis",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "Data Model Design and Multi-System Data Integration",
      question: "What is the most complex challenge in data design that affects system operations and integration?",
      options: [
        {
          text: "Poor existing data quality requiring complex migration with multi-system integrity challenges",
          score: 1,
          timeImpact: "30-50 hours for data migration design and multi-system integrity planning",
          description: "Duplicate, inconsistent, missing data combined with complex synchronization requirements across systems",
        },
        {
          text: "Balancing normalization, performance optimization, and cross-system data consistency",
          score: 2,
          timeImpact: "20-35 hours for optimal database design across performance and integrity requirements",
          description: "Data integrity impacts performance while denormalization complicates maintenance and cross-system consistency",
        },
        {
          text: "Designing flexible data structures for future business changes with real-time integration requirements",
          score: 3,
          timeImpact: "15-25 hours for flexible design with performance consideration",
          description: "Business changes require structural modifications while real-time integration affects performance optimization",
        },
        {
          text: "Automated data modeling with intelligent migration planning and performance optimization",
          score: 4,
          timeImpact: "8-15 hours with AI-powered data design and automated optimization",
          description: "AI-powered data model generation, automated migration strategies, and intelligent performance tuning",
        },
      ],
    },

    // Development Stage (3 questions)
    {
      stage: "development",
      painPoint: "Code Quality Management and Testing Strategy",
      question: "What is the biggest challenge in maintaining consistent code quality and implementing comprehensive testing?",
      options: [
        {
          text: "Varying skill levels among team members with complex business logic testing requirements",
          score: 1,
          timeImpact: "30-50 hours per week for quality assurance and test case creation",
          description: "Mixed experience levels require extensive mentoring while complex business rules need comprehensive manual test design",
        },
        {
          text: "Insufficient time for thorough code reviews and test environment setup challenges",
          score: 2,
          timeImpact: "20-35 hours per week on quality control and environment management",
          description: "Schedule pressure leads to rushed reviews while complex test environments require significant setup and maintenance",
        },
        {
          text: "Lack of automated quality enforcement with manual regression testing overhead",
          score: 3,
          timeImpact: "15-25 hours per week on manual quality checks and test execution",
          description: "Manual quality checks miss automated detectable issues while regression tests require time-consuming manual execution",
        },
        {
          text: "AI-powered code review and automated test generation with execution platform",
          score: 4,
          timeImpact: "5-10 hours per week with intelligent automation",
          description: "Automated detection of code issues, security vulnerabilities, and AI-generated test cases with automated execution",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "Integration Complexity and Debugging Challenges",
      question: "What causes the most delays in system integration and troubleshooting activities?",
      options: [
        {
          text: "Incompatible data formats with difficult-to-reproduce bugs and insufficient logging",
          score: 1,
          timeImpact: "4-8 weeks per integration plus 5-20 hours per bug investigation",
          description: "Extensive data transformation required while bugs occur under specific conditions with inadequate log information",
        },
        {
          text: "Unreliable third-party APIs with complex multi-system debugging challenges",
          score: 2,
          timeImpact: "2-4 weeks per integration plus 3-12 hours per multi-system issue",
          description: "Trial-and-error API integration while isolating problems across interconnected systems proves time-consuming",
        },
        {
          text: "Complex security requirements with production environment-specific issues",
          score: 3,
          timeImpact: "1-3 weeks per integration plus 2-8 hours per environment-specific investigation",
          description: "Secure communication protocols implementation while production-specific problems cannot be reproduced in development",
        },
        {
          text: "Intelligent integration platform with automated debugging and enhanced monitoring",
          score: 4,
          timeImpact: "3-5 days per integration plus 15-30 minutes per issue investigation",
          description: "Pre-built connectors with automated data mapping plus AI-powered root cause analysis and comprehensive logging",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "CI/CD and Release Management Complexity",
      question: "What is the most challenging aspect of continuous integration and deployment that affects release quality?",
      options: [
        {
          text: "Managing environment configuration differences with manual build failure analysis",
          score: 1,
          timeImpact: "10-20 hours per week on environment management plus 2-8 hours per build failure",
          description: "Settings differ between environments causing unexpected problems while build/test failures require manual investigation",
        },
        {
          text: "Insufficient post-deployment verification with complex emergency rollback procedures",
          score: 2,
          timeImpact: "5-15 hours of rework per week plus 1-4 hours per emergency response",
          description: "Perfunctory deployment confirmation leads to late problem discovery while rollback procedures are complex during emergencies",
        },
        {
          text: "Technical debt accumulation affecting new development with standardized deployment processes",
          score: 3,
          timeImpact: "5-10 hours per week addressing debt plus 2-4 hours per standard deployment",
          description: "Past compromise implementations accumulate making new features difficult while deployments follow established procedures",
        },
        {
          text: "Automated CI/CD pipeline with intelligent deployment orchestration and self-healing systems",
          score: 4,
          timeImpact: "15-30 minutes per release with automated failure recovery",
          description: "Fully automated deployment process with built-in safety checks, automatic rollback, and intelligent failure detection",
        },
      ],
    },

    // Testing Stage (3 questions)
    {
      stage: "testing",
      painPoint: "Test Coverage Optimization and Performance Testing",
      question: "What is the biggest challenge in achieving comprehensive test coverage and effective performance testing?",
      options: [
        {
          text: "Identifying all edge cases with complex realistic load scenario creation",
          score: 1,
          timeImpact: "40-70 hours per application for comprehensive test design and performance scenario creation",
          description: "Manual analysis required for all failure scenarios while creating realistic production-like load patterns proves complex",
        },
        {
          text: "Balancing test coverage with time constraints and performance bottleneck identification",
          score: 2,
          timeImpact: "25-40 hours per application for coverage optimization and performance analysis",
          description: "Prioritization decisions between thorough testing and delivery deadlines while manual performance analysis across components",
        },
        {
          text: "Maintaining test cases as requirements evolve with performance issue correlation to code changes",
          score: 3,
          timeImpact: "15-25 hours per application for test maintenance and performance investigation",
          description: "Continuous updates to test suites as functionality changes while investigating performance degradation causes",
        },
        {
          text: "AI-driven test generation with automated performance testing and analysis platform",
          score: 4,
          timeImpact: "5-10 hours per application with intelligent automation",
          description: "Automated test scenario identification and intelligent test case creation with AI-powered performance analysis and bottleneck detection",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "User Acceptance Testing Coordination and Quality Assurance",
      question: "What is the most challenging aspect of managing user acceptance testing and ensuring quality standards?",
      options: [
        {
          text: "Coordinating busy stakeholder schedules with extensive user training requirements",
          score: 1,
          timeImpact: "3-6 weeks coordination time plus 1-2 weeks training time",
          description: "Extensive back-and-forth communication for testing schedules while comprehensive user training required before effective testing",
        },
        {
          text: "Collecting and prioritizing diverse user feedback with complex defect triage processes",
          score: 2,
          timeImpact: "2-3 weeks feedback analysis plus additional time for defect prioritization",
          description: "Manual consolidation of diverse user feedback while determining critical vs minor issues for resolution priority",
        },
        {
          text: "Managing testing environments and user access with standardized feedback collection",
          score: 3,
          timeImpact: "1-2 weeks environment setup plus structured feedback collection time",
          description: "Complex test environment provisioning and user access management while implementing organized feedback collection methods",
        },
        {
          text: "Digital UAT platform with automated feedback collection and intelligent user coordination",
          score: 4,
          timeImpact: "2-3 days coordination time with automated analysis",
          description: "Streamlined user testing platform with automated feedback aggregation, analysis, and intelligent stakeholder coordination",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "Test Data Management and Automation Strategy",
      question: "What is the most time-consuming aspect of test data management and test automation implementation?",
      options: [
        {
          text: "Creating and maintaining complex test data sets with manual test execution overhead",
          score: 1,
          timeImpact: "3-8 hours per week for data preparation plus 40-60% of time on manual test execution",
          description: "Time-consuming test data creation for various scenarios while manual test suite execution slows development pace",
        },
        {
          text: "Test data synchronization across environments with selective test automation implementation",
          score: 2,
          timeImpact: "2-5 hours per week for data management plus partial automation maintenance",
          description: "Complex data synchronization between development, staging, and production environments while maintaining hybrid automation",
        },
        {
          text: "Automated test data generation with comprehensive test suite automation",
          score: 3,
          timeImpact: "1-3 hours per week for data generation oversight plus automated test maintenance",
          description: "Automated test data creation processes while maintaining comprehensive automated test suite execution",
        },
        {
          text: "AI-powered test data synthesis with intelligent test automation platform",
          score: 4,
          timeImpact: "30 minutes per week with intelligent automation management",
          description: "AI-generated realistic test data with intelligent test automation that adapts to application changes automatically",
        },
      ],
    },

    // Deployment Stage (3 questions)
    {
      stage: "deployment",
      painPoint: "Release Management and Environment Configuration",
      question: "What is the most challenging aspect of managing software releases and environment consistency?",
      options: [
        {
          text: "Coordinating deployments across multiple environments with complex configuration management",
          score: 1,
          timeImpact: "1-2 days per release plus 2-6 hours per environment configuration",
          description: "Manual coordination and verification across environments while configuration differences cause environment-specific issues",
        },
        {
          text: "Managing database schema changes with dependency version conflicts",
          score: 2,
          timeImpact: "4-8 hours per release plus 1-4 hours per dependency conflict resolution",
          description: "Complex database updates requiring careful planning while resolving conflicts between different library versions",
        },
        {
          text: "Ensuring zero-downtime deployments with infrastructure provisioning challenges",
          score: 3,
          timeImpact: "2-4 hours per release plus 1-2 hours per infrastructure setup",
          description: "Implementation of blue-green deployment strategies while manual infrastructure setup and capacity planning",
        },
        {
          text: "Automated CI/CD pipeline with Infrastructure as Code and intelligent deployment orchestration",
          score: 4,
          timeImpact: "15-30 minutes per release with automated infrastructure provisioning",
          description: "Fully automated deployment process with version-controlled infrastructure and intelligent environment provisioning",
        },
      ],
    },
    {
      stage: "deployment",
      painPoint: "Rollback Procedures and Failure Recovery",
      question: "What is the most time-consuming aspect of handling deployment failures and emergency recovery?",
      options: [
        {
          text: "Identifying deployment failure root causes with manual investigation processes",
          score: 1,
          timeImpact: "2-8 hours per incident for root cause analysis and manual recovery procedures",
          description: "Manual investigation across logs, metrics, and system components while executing complex rollback procedures safely",
        },
        {
          text: "Coordinating emergency response with stakeholder communication during incidents",
          score: 2,
          timeImpact: "1-4 hours per incident for coordination and communication management",
          description: "Careful rollback execution while maintaining data integrity and providing manual updates to stakeholder groups",
        },
        {
          text: "Automated rollback procedures with systematic incident response protocols",
          score: 3,
          timeImpact: "30 minutes-2 hours per incident with structured response procedures",
          description: "Established rollback procedures with systematic incident response while coordinating with defined stakeholder communication protocols",
        },
        {
          text: "Automated failure detection with self-healing systems and intelligent stakeholder notification",
          score: 4,
          timeImpact: "5-15 minutes per incident with automated recovery",
          description: "Intelligent monitoring with automatic rollback, self-healing capabilities, and automated stakeholder notification systems",
        },
      ],
    },
    {
      stage: "deployment",
      painPoint: "Security and Compliance in Deployment Pipeline",
      question: "What is the most complex challenge in maintaining security and compliance throughout the deployment process?",
      options: [
        {
          text: "Manual security scanning with complex compliance verification across environments",
          score: 1,
          timeImpact: "4-8 hours per release for security assessment and compliance verification",
          description: "Manual security assessments and vulnerability discovery while complex compliance checks across multiple environments",
        },
        {
          text: "Automated security scanning with standardized compliance workflows",
          score: 2,
          timeImpact: "2-4 hours per release for compliance workflow execution and security review",
          description: "Automated vulnerability scanning with established compliance procedures while maintaining security review processes",
        },
        {
          text: "Integrated security pipeline with automated compliance monitoring",
          score: 3,
          timeImpact: "1-2 hours per release for security pipeline oversight and compliance monitoring",
          description: "Security integrated into CI/CD pipeline with automated compliance monitoring and standardized security procedures",
        },
        {
          text: "AI-powered security analysis with intelligent compliance automation and risk assessment",
          score: 4,
          timeImpact: "15-30 minutes per release with intelligent security automation",
          description: "AI-powered security vulnerability detection with automated compliance verification and intelligent risk scoring systems",
        },
      ],
    },

    // Maintenance Stage (3 questions)
    {
      stage: "maintenance",
      painPoint: "System Monitoring and Incident Response",
      question: "What is the biggest challenge in monitoring system health and managing incident response?",
      options: [
        {
          text: "Alert fatigue from false positives with manual incident investigation and limited system visibility",
          score: 1,
          timeImpact: "2-4 hours daily on alert triage plus 1-3 hours per incident investigation",
          description: "Overwhelming alerts making real issue identification difficult while lack of system dependency visibility complicates incident resolution",
        },
        {
          text: "Manual metric correlation across multiple tools with time-consuming root cause analysis",
          score: 2,
          timeImpact: "1-3 hours per incident for data aggregation and 1-2 hours for correlation analysis",
          description: "Time spent aggregating data from multiple monitoring platforms while manually correlating metrics for root cause analysis",
        },
        {
          text: "Integrated monitoring platform with structured incident response but manual correlation processes",
          score: 3,
          timeImpact: "1-2 hours per incident with structured but manual analysis processes",
          description: "Unified monitoring platform with established incident procedures while manual correlation and analysis still required",
        },
        {
          text: "AI-powered intelligent monitoring with predictive alerting and automated root cause analysis",
          score: 4,
          timeImpact: "15-30 minutes per incident with intelligent automation",
          description: "Smart alerts with automatic root cause analysis, suggested remediation, and predictive issue detection capabilities",
        },
      ],
    },
    {
      stage: "maintenance",
      painPoint: "Technical Debt Management and Performance Optimization",
      question: "What is the most challenging aspect of managing technical debt while maintaining system performance?",
      options: [
        {
          text: "Identifying and quantifying technical debt with manual performance optimization across the codebase",
          score: 1,
          timeImpact: "1-2 weeks per assessment plus 20-30% slower feature delivery due to debt impact",
          description: "Manual code review and analysis to identify refactoring areas while performance issues require manual investigation and optimization",
        },
        {
          text: "Prioritizing debt against new features with systematic performance monitoring but manual optimization",
          score: 2,
          timeImpact: "50-100% estimation variance for debt work plus systematic performance analysis time",
          description: "Difficult trade-offs between addressing debt and delivering new functionality while performance monitoring is systematic but optimization manual",
        },
        {
          text: "Systematic debt tracking with automated performance monitoring and structured remediation planning",
          score: 3,
          timeImpact: "Structured debt assessment with performance baseline monitoring and planned remediation cycles",
          description: "Organized debt tracking with automated performance monitoring while remediation efforts are planned and systematically executed",
        },
        {
          text: "Automated technical debt detection with AI-powered performance optimization and intelligent remediation planning",
          score: 4,
          timeImpact: "1-2 days per assessment with intelligent optimization and automated remediation suggestions",
          description: "AI-powered code analysis with prioritized remediation recommendations, automated performance optimization, and intelligent debt management",
        },
      ],
    },
    {
      stage: "maintenance",
      painPoint: "Security Vulnerability Management and System Updates",
      question: "What is the most time-consuming aspect of managing security vulnerabilities and system maintenance?",
      options: [
        {
          text: "Manual vulnerability scanning with complex risk assessment and coordination across multiple systems",
          score: 1,
          timeImpact: "1-2 weeks per comprehensive scan plus 4-8 hours per vulnerability assessment and 2-4 hours per patch cycle",
          description: "Manual security assessments and vulnerability discovery while risk analysis and patch coordination across systems requires significant time",
        },
        {
          text: "Automated vulnerability scanning with manual risk assessment and systematic patch management",
          score: 2,
          timeImpact: "Regular automated scanning plus 2-4 hours per vulnerability analysis and structured patch deployment",
          description: "Automated vulnerability detection while manual analysis of severity and business impact plus systematic patch management procedures",
        },
        {
          text: "Integrated security monitoring with automated risk scoring and coordinated patch management",
          score: 3,
          timeImpact: "Continuous monitoring with automated risk assessment and 1-2 hours per patch cycle coordination",
          description: "Automated security monitoring with risk scoring while patch management follows established coordination procedures across systems",
        },
        {
          text: "AI-powered continuous security monitoring with intelligent risk assessment and automated patch management",
          score: 4,
          timeImpact: "30 minutes per vulnerability with intelligent automation and automated patch deployment",
          description: "Continuous AI-powered security monitoring with automated risk scoring, intelligent patch prioritization, and automated deployment systems",
        },
      ],
    },
  ],
}
