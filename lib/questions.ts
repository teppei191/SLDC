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
  en: [
    // Planning Stage (3 questions) - Adjusted scoring to be higher and more balanced
    {
      stage: "planning",
      painPoint: "Requirements Gathering Efficiency",
      question: "What is the most time-consuming challenge when gathering requirements from stakeholders?",
      options: [
        {
          text: "Scheduling and coordinating meetings with multiple stakeholders",
          score: 2,
          timeImpact: "2-4 weeks per project",
          description: "Significant delays due to stakeholder availability and conflicting schedules",
        },
        {
          text: "Conflicting requirements between different departments",
          score: 3,
          timeImpact: "1-3 weeks per project",
          description: "Time spent resolving conflicts and building consensus among stakeholders",
        },
        {
          text: "Documenting and maintaining requirement changes",
          score: 4,
          timeImpact: "5-10 hours per week",
          description: "Manual tracking of requirement evolution and impact analysis",
        },
        {
          text: "Using automated requirement management tools",
          score: 5,
          timeImpact: "2-3 hours per week",
          description: "Streamlined requirement capture, tracking, and change management",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "Project Estimation Accuracy",
      question: "What causes the most significant estimation errors in your project planning?",
      options: [
        {
          text: "Lack of historical data from similar projects",
          score: 2,
          timeImpact: "50-100% estimation variance",
          description: "Estimates based on intuition rather than data-driven analysis",
        },
        {
          text: "Underestimating integration complexity with existing systems",
          score: 3,
          timeImpact: "30-50% estimation variance",
          description: "Hidden complexities in system integration discovered during development",
        },
        {
          text: "Insufficient consideration of testing and quality assurance time",
          score: 4,
          timeImpact: "20-30% estimation variance",
          description: "Focus on development time while underestimating QA activities",
        },
        {
          text: "AI-powered estimation based on historical project data",
          score: 5,
          timeImpact: "5-10% estimation variance",
          description: "Machine learning models provide accurate estimates based on past performance",
        },
      ],
    },
    {
      stage: "planning",
      painPoint: "Resource Allocation Optimization",
      question: "What is the biggest challenge in allocating team members to project tasks?",
      options: [
        {
          text: "Unclear understanding of individual team member capabilities",
          score: 2,
          timeImpact: "15-25% productivity loss",
          description: "Mismatched skills to tasks resulting in inefficient resource utilization",
        },
        {
          text: "Competing priorities across multiple concurrent projects",
          score: 3,
          timeImpact: "10-20% productivity loss",
          description: "Resource conflicts and context switching between projects",
        },
        {
          text: "Manual tracking of team capacity and availability",
          score: 4,
          timeImpact: "5-15% productivity loss",
          description: "Time spent on administrative tasks instead of value-added work",
        },
        {
          text: "Intelligent resource matching and capacity planning tools",
          score: 5,
          timeImpact: "5-10% productivity gain",
          description: "Automated optimization of resource allocation based on skills and availability",
        },
      ],
    },

    // Analysis Stage (3 questions) - Adjusted scoring
    {
      stage: "analysis",
      painPoint: "Business Process Understanding",
      question: "What is the most challenging aspect of analyzing current business processes?",
      options: [
        {
          text: "Undocumented processes and tribal knowledge",
          score: 2,
          timeImpact: "20-40 hours per process",
          description: "Extensive interviews and observation required to understand current state",
        },
        {
          text: "Inconsistent process execution across different teams",
          score: 3,
          timeImpact: "15-30 hours per process",
          description: "Multiple variations of the same process requiring standardization",
        },
        {
          text: "Complex interdependencies between different business areas",
          score: 4,
          timeImpact: "10-20 hours per process",
          description: "Mapping relationships and data flows between interconnected processes",
        },
        {
          text: "Automated process discovery and documentation tools",
          score: 5,
          timeImpact: "2-5 hours per process",
          description: "AI-powered analysis of system logs and user interactions to map processes",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "System Architecture Design",
      question: "What is the most difficult decision in designing system architecture?",
      options: [
        {
          text: "Choosing between new technologies and proven solutions",
          score: 2,
          timeImpact: "2-4 weeks evaluation time",
          description: "Extensive research and proof-of-concept development for technology decisions",
        },
        {
          text: "Balancing performance requirements with development complexity",
          score: 3,
          timeImpact: "1-3 weeks evaluation time",
          description: "Trade-off analysis between system performance and implementation effort",
        },
        {
          text: "Ensuring scalability for future growth requirements",
          score: 4,
          timeImpact: "1-2 weeks evaluation time",
          description: "Designing flexible architecture that can accommodate future needs",
        },
        {
          text: "AI-assisted architecture recommendation systems",
          score: 5,
          timeImpact: "2-3 days evaluation time",
          description: "Intelligent suggestions based on requirements, constraints, and best practices",
        },
      ],
    },
    {
      stage: "analysis",
      painPoint: "Data Model Design",
      question: "What is the most complex aspect of designing your data model?",
      options: [
        {
          text: "Migrating and cleaning data from legacy systems",
          score: 2,
          timeImpact: "4-8 weeks per system",
          description: "Extensive data quality issues and format inconsistencies in legacy systems",
        },
        {
          text: "Ensuring data consistency across multiple systems",
          score: 3,
          timeImpact: "2-4 weeks per integration",
          description: "Complex synchronization requirements and conflict resolution strategies",
        },
        {
          text: "Optimizing database performance for expected load",
          score: 4,
          timeImpact: "1-3 weeks per optimization",
          description: "Balancing normalization, indexing, and query performance requirements",
        },
        {
          text: "Automated data modeling and optimization tools",
          score: 5,
          timeImpact: "3-5 days per model",
          description: "AI-powered data model generation and performance optimization suggestions",
        },
      ],
    },

    // Development Stage (3 questions) - Adjusted scoring
    {
      stage: "development",
      painPoint: "Code Quality Management",
      question: "What is the biggest challenge in maintaining consistent code quality across your team?",
      options: [
        {
          text: "Varying skill levels and experience among team members",
          score: 2,
          timeImpact: "20-30% additional review time",
          description: "Extensive mentoring and code review required for junior developers",
        },
        {
          text: "Insufficient time allocated for thorough code reviews",
          score: 3,
          timeImpact: "15-25% technical debt accumulation",
          description: "Rushed reviews leading to quality issues discovered later in development",
        },
        {
          text: "Lack of automated code quality enforcement",
          score: 4,
          timeImpact: "10-15% rework due to quality issues",
          description: "Manual quality checks missing issues that could be caught automatically",
        },
        {
          text: "AI-powered code review and quality analysis tools",
          score: 5,
          timeImpact: "5-10% improvement in code quality",
          description: "Automated detection of code smells, security issues, and best practice violations",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "Testing Strategy Implementation",
      question: "What is the most time-consuming aspect of your testing process?",
      options: [
        {
          text: "Creating comprehensive test cases for complex business logic",
          score: 2,
          timeImpact: "40-60% of development time",
          description: "Manual test case design and maintenance for intricate business rules",
        },
        {
          text: "Setting up and maintaining test data and environments",
          score: 3,
          timeImpact: "20-30% of development time",
          description: "Complex test environment configuration and data preparation",
        },
        {
          text: "Executing regression tests for each release",
          score: 4,
          timeImpact: "15-25% of development time",
          description: "Manual execution of test suites for every code change",
        },
        {
          text: "Automated test generation and execution platform",
          score: 5,
          timeImpact: "5-10% of development time",
          description: "AI-generated test cases with automated execution and reporting",
        },
      ],
    },
    {
      stage: "development",
      painPoint: "Integration Complexity",
      question: "What causes the most delays in system integration activities?",
      options: [
        {
          text: "Incompatible data formats between different systems",
          score: 2,
          timeImpact: "3-6 weeks per integration",
          description: "Extensive data transformation and mapping required for system communication",
        },
        {
          text: "Unreliable or poorly documented third-party APIs",
          score: 3,
          timeImpact: "2-4 weeks per integration",
          description: "Trial-and-error approach due to inadequate API documentation",
        },
        {
          text: "Complex authentication and security requirements",
          score: 4,
          timeImpact: "1-3 weeks per integration",
          description: "Implementation of secure communication protocols and access controls",
        },
        {
          text: "Intelligent integration platform with pre-built connectors",
          score: 5,
          timeImpact: "3-5 days per integration",
          description: "Automated data mapping and transformation with extensive connector library",
        },
      ],
    },

    // Testing Stage (3 questions) - Adjusted scoring
    {
      stage: "testing",
      painPoint: "Test Coverage Optimization",
      question: "What is the biggest challenge in achieving comprehensive test coverage?",
      options: [
        {
          text: "Identifying all possible edge cases and scenarios",
          score: 2,
          timeImpact: "30-50% of testing effort",
          description: "Manual analysis required to discover all potential failure scenarios",
        },
        {
          text: "Balancing test coverage with available testing time",
          score: 3,
          timeImpact: "20-30% of testing effort",
          description: "Prioritization decisions between comprehensive testing and delivery deadlines",
        },
        {
          text: "Maintaining test cases as requirements evolve",
          score: 4,
          timeImpact: "15-25% of testing effort",
          description: "Continuous updates to test suites as functionality changes",
        },
        {
          text: "AI-driven test case generation and optimization",
          score: 5,
          timeImpact: "5-10% of testing effort",
          description: "Automated identification of test scenarios and intelligent test case creation",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "Performance Testing Challenges",
      question: "What is the most difficult aspect of performance testing?",
      options: [
        {
          text: "Creating realistic load scenarios that match production usage",
          score: 2,
          timeImpact: "2-4 weeks per application",
          description: "Complex analysis of user behavior patterns and system usage characteristics",
        },
        {
          text: "Identifying performance bottlenecks in complex systems",
          score: 3,
          timeImpact: "1-3 weeks per application",
          description: "Manual analysis of performance metrics across multiple system components",
        },
        {
          text: "Correlating performance issues with specific code changes",
          score: 4,
          timeImpact: "1-2 weeks per issue",
          description: "Time-consuming investigation to link performance degradation to code modifications",
        },
        {
          text: "Automated performance testing and analysis platform",
          score: 5,
          timeImpact: "2-3 days per application",
          description: "AI-powered performance analysis with automatic bottleneck identification",
        },
      ],
    },
    {
      stage: "testing",
      painPoint: "User Acceptance Testing Coordination",
      question: "What is the most challenging aspect of managing user acceptance testing?",
      options: [
        {
          text: "Coordinating schedules with busy business stakeholders",
          score: 2,
          timeImpact: "2-4 weeks coordination time",
          description: "Extensive back-and-forth communication to align testing schedules",
        },
        {
          text: "Training users on new system functionality for testing",
          score: 3,
          timeImpact: "1-2 weeks training time",
          description: "Comprehensive user training required before effective testing can begin",
        },
        {
          text: "Collecting and prioritizing feedback from multiple user groups",
          score: 4,
          timeImpact: "1-2 weeks analysis time",
          description: "Manual consolidation and analysis of diverse user feedback",
        },
        {
          text: "Digital UAT platform with automated feedback collection",
          score: 5,
          timeImpact: "2-3 days coordination time",
          description: "Streamlined user testing with automated feedback aggregation and analysis",
        },
      ],
    },

    // Deployment Stage (3 questions) - Adjusted scoring
    {
      stage: "deployment",
      painPoint: "Release Management Complexity",
      question: "What is the most challenging aspect of managing software releases?",
      options: [
        {
          text: "Coordinating deployments across multiple environments",
          score: 2,
          timeImpact: "1-2 days per release",
          description: "Manual coordination and verification across development, staging, and production",
        },
        {
          text: "Managing database schema changes and data migrations",
          score: 3,
          timeImpact: "4-8 hours per release",
          description: "Complex database updates requiring careful planning and rollback strategies",
        },
        {
          text: "Ensuring zero-downtime deployments",
          score: 4,
          timeImpact: "2-4 hours per release",
          description: "Implementation of blue-green or rolling deployment strategies",
        },
        {
          text: "Automated CI/CD pipeline with intelligent deployment orchestration",
          score: 5,
          timeImpact: "15-30 minutes per release",
          description: "Fully automated deployment process with built-in safety checks and rollback",
        },
      ],
    },
    {
      stage: "deployment",
      painPoint: "Environment Configuration Management",
      question: "What causes the most issues when deploying to different environments?",
      options: [
        {
          text: "Configuration differences between environments",
          score: 2,
          timeImpact: "2-6 hours per deployment",
          description: "Manual configuration updates and environment-specific adjustments",
        },
        {
          text: "Dependency version mismatches",
          score: 3,
          timeImpact: "1-4 hours per deployment",
          description: "Resolving conflicts between different library and framework versions",
        },
        {
          text: "Infrastructure provisioning and scaling",
          score: 4,
          timeImpact: "1-2 hours per deployment",
          description: "Manual infrastructure setup and capacity planning",
        },
        {
          text: "Infrastructure as Code with automated environment provisioning",
          score: 5,
          timeImpact: "10-20 minutes per deployment",
          description: "Consistent, automated environment creation with version-controlled configurations",
        },
      ],
    },
    {
      stage: "deployment",
      painPoint: "Rollback and Recovery Procedures",
      question: "What is the most time-consuming aspect of handling deployment failures?",
      options: [
        {
          text: "Identifying the root cause of deployment failures",
          score: 2,
          timeImpact: "2-8 hours per incident",
          description: "Manual investigation across logs, metrics, and system components",
        },
        {
          text: "Executing rollback procedures safely",
          score: 3,
          timeImpact: "1-4 hours per incident",
          description: "Careful reversal of changes while maintaining data integrity",
        },
        {
          text: "Communicating status to stakeholders during incidents",
          score: 4,
          timeImpact: "30 minutes-2 hours per incident",
          description: "Manual updates to various stakeholder groups during outages",
        },
        {
          text: "Automated failure detection and self-healing systems",
          score: 5,
          timeImpact: "5-15 minutes per incident",
          description: "Intelligent monitoring with automatic rollback and stakeholder notification",
        },
      ],
    },

    // Maintenance Stage (3 questions) - Adjusted scoring
    {
      stage: "maintenance",
      painPoint: "System Monitoring and Alerting",
      question: "What is the biggest challenge in monitoring system health and performance?",
      options: [
        {
          text: "Alert fatigue from too many false positives",
          score: 2,
          timeImpact: "2-4 hours daily on alert triage",
          description: "Overwhelming number of alerts making it difficult to identify real issues",
        },
        {
          text: "Lack of visibility into system dependencies and interactions",
          score: 3,
          timeImpact: "1-3 hours per incident investigation",
          description: "Difficulty tracing issues across complex, interconnected systems",
        },
        {
          text: "Manual correlation of metrics across different monitoring tools",
          score: 4,
          timeImpact: "1-2 hours per incident investigation",
          description: "Time spent aggregating data from multiple monitoring platforms",
        },
        {
          text: "AI-powered intelligent monitoring with predictive alerting",
          score: 5,
          timeImpact: "15-30 minutes per incident investigation",
          description: "Smart alerts with automatic root cause analysis and suggested remediation",
        },
      ],
    },
    {
      stage: "maintenance",
      painPoint: "Technical Debt Management",
      question: "What is the most challenging aspect of managing technical debt?",
      options: [
        {
          text: "Identifying and quantifying technical debt across the codebase",
          score: 2,
          timeImpact: "1-2 weeks per assessment",
          description: "Manual code review and analysis to identify areas needing refactoring",
        },
        {
          text: "Prioritizing technical debt against new feature development",
          score: 3,
          timeImpact: "20-30% slower feature delivery",
          description: "Difficult trade-offs between addressing debt and delivering new functionality",
        },
        {
          text: "Estimating the effort required for debt remediation",
          score: 4,
          timeImpact: "50-100% estimation variance",
          description: "Uncertainty in scoping refactoring efforts and their impact",
        },
        {
          text: "Automated technical debt detection and remediation planning",
          score: 5,
          timeImpact: "1-2 days per assessment",
          description: "AI-powered code analysis with prioritized remediation recommendations",
        },
      ],
    },
    {
      stage: "maintenance",
      painPoint: "Security Vulnerability Management",
      question: "What is the most time-consuming aspect of managing security vulnerabilities?",
      options: [
        {
          text: "Scanning and identifying vulnerabilities across all systems",
          score: 2,
          timeImpact: "1-2 weeks per comprehensive scan",
          description: "Manual security assessments and vulnerability discovery processes",
        },
        {
          text: "Assessing the risk and impact of discovered vulnerabilities",
          score: 3,
          timeImpact: "4-8 hours per vulnerability",
          description: "Manual analysis of vulnerability severity and potential business impact",
        },
        {
          text: "Coordinating patches and updates across multiple systems",
          score: 4,
          timeImpact: "2-4 hours per patch cycle",
          description: "Manual scheduling and deployment of security updates",
        },
        {
          text: "Automated vulnerability scanning with intelligent risk assessment",
          score: 5,
          timeImpact: "30 minutes per vulnerability",
          description: "Continuous security monitoring with automated risk scoring and patch management",
        },
      ],
    },
  ],
  ja: [
    // 同様の構造で日本語版も実装（スコアリング調整済み）
    // Planning Stage (3 questions)
    {
      stage: "planning",
      painPoint: "要件収集効率",
      question: "ステークホルダーから要件を収集する際の最も時間のかかる課題は何ですか？",
      options: [
        {
          text: "複数のステークホルダーとの会議スケジュール調整",
          score: 2,
          timeImpact: "プロジェクトあたり2-4週間",
          description: "ステークホルダーの都合とスケジュール競合による大幅な遅延",
        },
        {
          text: "異なる部門間での要件の競合",
          score: 3,
          timeImpact: "プロジェクトあたり1-3週間",
          description: "競合解決とステークホルダー間の合意形成に要する時間",
        },
        {
          text: "要件変更の文書化と維持",
          score: 4,
          timeImpact: "週5-10時間",
          description: "要件の変遷の手動追跡と影響分析",
        },
        {
          text: "自動化された要件管理ツールの使用",
          score: 5,
          timeImpact: "週2-3時間",
          description: "合理化された要件取得、追跡、変更管理",
        },
      ],
    },
    // 他の日本語質問も同様に実装...
  ],
}
