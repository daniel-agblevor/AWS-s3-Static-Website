# AWS S3 Static Website Hosting  

## 1. Create an S3 Bucket  
- Open the **S3 Console**, create a bucket, and name it after your domain (e.g., `example.com`).  
- Choose an AWS region.  

## 2. Enable Static Website Hosting  
- In **Properties**, enable **Static Website Hosting**.  
- Set `index.html` as the index document and `error.html` as the error document.  

## 3. Upload Website Files  
- Upload **HTML, CSS, JS, and images** to the bucket.  

## 4. Set Public Access  
- Update the **bucket policy** to allow public access.  
- Ensure objects are **publicly readable**.  

## 5. Test Your Website  
- Open the **S3 endpoint URL** or use a **custom domain** to verify functionality.  
