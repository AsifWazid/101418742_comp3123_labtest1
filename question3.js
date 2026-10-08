const fs = require('fs');
const path = require('path');

const logsPath = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsPath)) {
    const files = fs.readdirSync(logsPath);

    files.forEach(file => {
        const filePath = path.join(logsPath, file);

        console.log(`delete files...${file}`);
        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logsPath);
}

fs.mkdirSync(logsPath);

process.chdir(logsPath);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;

    fs.writeFileSync(fileName, '');

    console.log(fileName);
}