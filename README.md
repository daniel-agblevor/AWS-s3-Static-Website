<<<<<<< HEAD
# 🌐 AWS S3 Static Website Hosting Project

This project demonstrates how to deploy a fully functional static website using **Amazon S3**, leveraging AWS cloud infrastructure for scalable and cost-effective hosting. The project showcases a complete setup, from bucket creation to access testing, along with screenshots and practical considerations for real-world deployment.

---

## 🚀 Project Overview

In this project, I have successfully:
- Created and configured an S3 bucket for static website hosting.
- Uploaded a complete static website (HTML, CSS, JavaScript, images).
- Set up public permissions to ensure accessibility.
- Validated the hosted site using both the AWS S3 endpoint and a custom domain (optional).

This repository serves as both a technical demonstration and a practical guide for stakeholders, developers, or clients interested in cloud-hosted static sites.

---

## 🛠️ Technologies Used

- **Amazon S3** – Object storage for hosting static content.
- **HTML/CSS/JavaScript** – Frontend technologies used for the website.
- **AWS IAM & Policies** – For managing public access.

---

## 📁 Project Structure

```

/website-files
│
├── index.html
├── error.html
├── /css
│   └── styles.css
├── /js
│   └── script.js
├── /images
│   └── logo.png

```

---

## 📝 Step-by-Step Implementation

### 1. ✅ Create an S3 Bucket
- Provided a globally unique bucket name [daniel-agblevor].
- Selected the region closest to the target audience for low latency.

📸 *[screenshots/create-bucket-1.png]*
📸 *[screenshots/create-bucket-2.png]*
📸 *[screenshots/create-bucket-3.png]*

---

### 2. ⚙️ Configure Static Website Hosting
- Enabled **Static Website Hosting** under the bucket's Properties.
- Set `index.html` as the index document.
- Added `error.html` as the error fallback.

📸 *[screenshots/website-hosting-settings.png]*

---

### 3. 📤 Upload Website Files
- Uploaded all necessary static files.
- Maintained a clean and logical folder structure.

📸 *[screenshots/uploaded-files.png]*

---

### 4. 🔐 Set Bucket Permissions
- Modified the **bucket policy** to allow public `GetObject` access.
- Ensured secure and minimal access through IAM best practices.

📄 *[screenshots/bucket-policy.png]*  
📸 *[screenshots/permissions-tab.png]*

---

### 5. 🔍 Test the Website
- Accessed the website through the **AWS S3 endpoint**:
```
http://daniel-agblevor.s3-website-us-east-1.amazonaws.com

```
- Verified full functionality of pages, images, and scripts.

📸 *[screenshots/website-light-1.png]*
📸 *[screenshots/website-dark-1.png]*
📸 *[screenshots/website-light-2.png]*
📸 *[screenshots/website-dark-2.png]*
 
---

## 💡 Key Accomplishments

- Deployed a production-ready static site using cloud-native tooling.
- Demonstrated knowledge of AWS policies, permissions, and hosting.
- Ensured best practices in public access and security.
- Delivered a clean, fast, and globally accessible web experience.

---

## 📈 Future Enhancements

- integrated the static site with a custom domain using **Route 53 DNS Management** or a third-party DNS provider like **Cloudflare**.
- Integrate with **CloudFront** for CDN support and HTTPS.
- Automate deployments with **CI/CD pipelines** (GitHub Actions or AWS CodePipeline).
- Add versioning or logging for better tracking and rollback.

---

## 📎 Supporting Files

- `bucket-policy.json` – Example of the public read policy used.
- `screenshots/` – Folder with implementation screenshots.
- `website-files/` – The actual static website content.

---

## 🤝 Contact

For questions, suggestions, or collaboration opportunities:

**TeraSight**  
📧 [mcdanagb@gmail.com]  
🔗 [LinkedIn](https://www.linkedin.com/in/daniel-agblevor/) | [Portfolio](http://daniel-agblevor.s3-website-us-east-1.amazonaws.com)

---
=======
# AWS S3 Static Website Hosting Guide  

## 1. Create an S3 Bucket  
- Open the **AWS S3 Console** and create a new bucket.  
- Name the bucket according to your website's domain (e.g., `example.com`).  
- Select the appropriate **AWS region** for your hosting needs.  

## 2. Configure Static Website Hosting  
- Navigate to the **Properties** tab of the bucket.  
- Enable **Static Website Hosting**.  
- Set the **index document** (e.g., `index.html`).  
- Define an **error document** (e.g., `error.html`).  

## 3. Upload Website Content  
- Upload all static files (**HTML, CSS, JavaScript, images, etc.**) to the S3 bucket.  
- Organize them into directories as needed.  

## 4. Set Bucket Permissions  
- Update the **bucket policy** to allow public access to the content.  
- Ensure that all website files are **publicly readable**.  

## 5. Test the Website  
- Access the website using the **S3 endpoint URL** or a **custom domain**.  
- Verify that all pages and resources load correctly.  
>>>>>>> afaf828c6549cba7e3328e8a61ddbcc9caa4d0a1
