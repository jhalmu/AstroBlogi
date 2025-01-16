import { statSync } from "fs";

export function remarkModifiedTime()
{
    return function (file)
    {
        const filepath = file.history[0];
        const result = statSync(filepath);
        file.data.astro.frontmatter.lastModified = result.mtime.toISOString();
    };
}

// import { execSync } from "child_process";

// export function remarkModifiedTime()
// {
//     return function (tree, file)
//     {
//         const filepath = file.history[0];
//         const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
//         file.data.astro.frontmatter.lastModified = result.toString();
//     };
// }