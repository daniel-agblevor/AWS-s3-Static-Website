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
