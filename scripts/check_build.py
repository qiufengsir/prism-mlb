import os

project_root = r"c:\Users\Lenovo\Desktop\AI_project_all\Dream of Youth"
dist_dir = os.path.join(project_root, "dist")
template_path = os.path.join(project_root, "template.html")

files = []
for root, dirs, filenames in os.walk(dist_dir):
    for f in filenames:
        files.append(os.path.relpath(os.path.join(root, f), project_root))

output_path = os.path.join(project_root, "src", "_build_check.txt")
with open(output_path, "w", encoding="utf-8") as out:
    out.write("template exists: " + str(os.path.exists(template_path)) + "\n")
    out.write("template size: " + str(os.path.getsize(template_path) if os.path.exists(template_path) else 0) + "\n\n")
    if os.path.exists(template_path):
        with open(template_path, "r", encoding="utf-8") as f:
            out.write("--- template.html ---\n")
            out.write(f.read())
            out.write("\n\n")
    out.write("\n".join(sorted(files)))
    for html_file in ["index.html", "team/index.html"]:
        out.write(f"\n\n--- dist/{html_file} full content ---\n")
        file_path = os.path.join(dist_dir, html_file)
        if os.path.exists(file_path):
            with open(file_path, "r", encoding="utf-8") as f:
                out.write(f.read())
        else:
            out.write(f"dist/{html_file} not found")
