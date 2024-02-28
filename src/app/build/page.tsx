"use client";
import { Button } from "antd";
import { RetweetOutlined } from "@ant-design/icons";    
import axios from 'axios';

export default function Home() {
    const buildUrl = "https://api.netlify.com/build_hooks/65deba11bb7acd956a44b088";
    const statusUrl = "https://api.netlify.com/api/v1/badges/b979f67f-7023-468d-9442-1a6e76af2807/deploy-status";

    const handleBuild = async () => await axios.post(buildUrl, {});

    return (
        <main>
            <iframe 
                src={statusUrl} 
                height="20" 
                width="120" 
                frameBorder="0"
            />
            <br />
            <Button onClick={handleBuild}>
                <RetweetOutlined /> Rebuild
            </Button>
        </main>
    );
}
