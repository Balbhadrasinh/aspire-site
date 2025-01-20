const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl : 'https://sonar.aspiresoftware.in/',
        token : "f10a3b3fcca0b139ea5d9feddfb47cffb8764451",
        options: {
            'sonar.projectName': 'aspire-site',
            'sonar.projectDescription': 'Aspire Site Description',
            'sonar.projectKey': 'aspire-site',
            'sonar.sources': '.',
            'sonar.exclusions': 'test/*, node_modules/*, public/*'
        }
    },
    () => process.exit()
)