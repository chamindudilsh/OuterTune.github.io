let sidebar = document.getElementById("sidebar")
function showSidebar(){
    sidebar.style.display = 'flex'
}
function closeSidebar(){
    sidebar.style.display = "none"
}

// Download Button

// email: outertune@protonmail.com

const owner = "DD3Boh";  
const repo = "OuterTune"; 
const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;

let downloadBtn = document.getElementById("download-btn")
downloadBtn.addEventListener("click", async function(){
    try{
        const response = await fetch(apiUrl)
        if(!response.ok){throw new Error("Error! failed to fetch data!")}

        const data = await response.json()

        const apkFile = data.assets.find(assets => assets.name.endsWith(".apk"))

        if(apkFile){
            window.location.href = apkFile.browser_download_url
        }
        else{
            alert("no apk file found in the latest release!")
        }
    }

    catch{
        console.error("error fetching latest release", error)
        alert("failed to get the latest apk")
    }
    
})


// Copy email button

function copyEmail(email) {
    navigator.clipboard.writeText(email) 
        .then(() => alert("Email copied to clipboard!")) 
        .catch(err => console.error("Error copying email: ", err)); 
}

let githubPic = document.getElementById("github-pic")
function redirectGithub(github){
    window.open(github,"_blank");

}
githubPic.addEventListener("click", function(){
    redirectGithub("https://github.com/juraijAhmed")
} )

