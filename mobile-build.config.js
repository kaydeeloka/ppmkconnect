// Mobile build configuration - Fixed SFTP null reference error
module.exports = {
  build: {
    target: 'mobile',
    platform: 'web',
    output: 'dist',
    publicPath: '/',
    // Disable SFTP deployment to prevent null reference errors
    deployment: {
      type: 'static',
      sftp: {
        enabled: false,
        host: '',
        username: '',
        password: '',
        remotePath: '',
        isPublic: false // Explicitly set to prevent null reference
      },
      static: {
        enabled: true,
        outputDir: 'dist',
        isPublic: true,
        baseUrl: '/',
        compression: true
      }
    }
  },
  // Static hosting configuration
  static: {
    enabled: true,
    outputDir: 'dist',
    baseUrl: '/',
    isPublic: true,
    compression: true,
    caching: {
      enabled: true,
      maxAge: 31536000 // 1 year for static assets
    }
  },
  // Build optimization
  optimization: {
    minify: true,
    treeshake: true,
    splitChunks: true,
    target: 'es2015'
  },
  // Ensure proper mobile build settings
  mobile: {
    enabled: true,
    platform: 'web',
    deployment: {
      type: 'static',
      isPublic: true,
      sftp: {
        enabled: false,
        isPublic: false // Prevent null access
      }
    }
  },
  // Additional safety configuration
  sftp: {
    enabled: false,
    host: '',
    username: '',
    password: '',
    remotePath: '',
    isPublic: false
  }
}
