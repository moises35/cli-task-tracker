<div align="center"> 
	<img src="https://github.com/user-attachments/assets/b30214f9-4254-4652-a062-9aa1a4f77cfd" width="90px" >
</div>
<hr/>
<div align="center">

![Node](https://img.shields.io/badge/Node.js-43853D.svg?style=for-the-badge&logo=node.js&logoColor=white&style=flat)
![Typescript](https://img.shields.io/badge/Typescript-007ACC?style=flat&logo=typescript&logoColor=white)
![CLI](https://img.shields.io/badge/Cli%20App-323330?logo=gnometerminal&logoColor=fff&style=flat)

</div>

## 📖 Table of Content
<ul>
    <li><a href="#-preview">💻 Preview</a></li>
    <li><a href="-prerequisites">📝 Prerequisites</a></li>
    <li><a href="#-installation-and-running-the-project">🚀 Installation and Running the Project</a></li>
    <li><a href="#-features">✨ Features</a></li>
    <li><a href="#-usage">📋 Usage</a></li>
</ul>

## 💻 Preview
<div align="center"> 
	<img src="https://github.com/user-attachments/assets/92b6a39d-477f-4f57-a06d-90276ba6d431" >
</div>

## 📝 Prerequisites

- [NodeJS](https://nodejs.org/en) - Versión >20.15.0

## 🚀 Installation and Running the Project

1. Clone the repository
   ```sh
   git clone https://github.com/moises35/cli-task-tracker.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Build the project
   ```sh
   npm run build
   ```
4. Link the terminal command with the project
   ```sh
   npm link
   ```
5. Use the application::
   ```sh
   task-tracker --help
   task-tracker add "Buy cookies"
   task-tracker add "Buy rgb lights"
   task-tracker add "Help clean the house"
   task-tracker mark-done 1
   task-tracker mark-in-progress 3
   task-tracker list
   ```
6. Done🚀


## ✨ Features
+ Add, Update, and Delete tasks
+ Mark a task as in progress or done
+ List all tasks
+ List all tasks that are done
+ List all tasks that are not done
+ List all tasks that are in progress


## 📋 Usage
Usage: `task-cli [options] [command]`

Options:
- `-V`, `--version`: output the version number
- `-h`, `--help`: display help for command

Commands:
- `add <task>`: Add a new task
- `update <id> <task>`: Update a task
- `delete <id>`: Delete a task
- `mark-in-progress <id>`: Mark a task as in progress
- `mark-done <id>`: Mark a task as done
- `list [status]`: List tasks by status. Status can be: done | todo | in-progress | none
- `help [command]`: display help for command


Solution to the [Task-Tracker (Roadmap.sh)](https://roadmap.sh/projects/task-tracker) challenge
