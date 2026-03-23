const fs = require('fs');
const path = require('path');

const srcDir = path.join('c:', 'Users', 'ramup', 'OneDrive', 'Desktop', 'portfolio', 'src');
const componentsDir = path.join(srcDir, 'components');
const rootDir = path.join('c:', 'Users', 'ramup', 'OneDrive', 'Desktop', 'portfolio');

const filesToUpdate = [
    path.join(srcDir, 'index.css'),
    path.join(rootDir, 'tailwind.config.js'),
];

// Add all files in componentsDir
try {
    const componentFiles = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));
    componentFiles.forEach(f => filesToUpdate.push(path.join(componentsDir, f)));
} catch (e) {}

filesToUpdate.forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace colors globally
    content = content.replace(/neon-green/g, 'dark-accent');
    content = content.replace(/cyan-400/g, 'orange-400');
    content = content.replace(/cyan-500/g, 'orange-500');
    content = content.replace(/0,\s*204,\s*255/g, '245, 165, 36'); // the old rgb for neon-green
    content = content.replace(/#00ccff/ig, '#f5a524'); // replace any stray hex
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
});
