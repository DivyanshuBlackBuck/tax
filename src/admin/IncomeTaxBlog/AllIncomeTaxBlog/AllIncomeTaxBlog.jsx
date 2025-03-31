import { useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { Link } from "react-router-dom";
import './AllIncomeTaxBlog.css';


function AllIncomeTaxBlog() {
    const [services, setServices] = useState([
        {
            id: 1,
            serviceName: "Web Development",
            title: "Full Stack",
            description: "We create modern web applications",
            image: "", // Placeholder Image
            points: ["Responsive Design", "SEO Optimized", "Fast Performance"],
        },
        {
            id: 2,
            serviceName: "Mobile App Development",
            title: "React Native",
            description: "We build mobile apps for iOS & Android",
            image: "",
            points: ["Cross-Platform", "Smooth UI", "High Performance"],
        },
        {
            id: 3,
            serviceName: "Web Development",
            title: "Full Stack",
            description: "We create modern web applications",
            image: "", // Placeholder Image
            points: ["Responsive Design", "SEO Optimized", "Fast Performance"],
        },
        {
            id: 4,
            serviceName: "Mobile App Development",
            title: "React Native",
            description: "We build mobile apps for iOS & Android",
            image: "",
            points: ["Cross-Platform", "Smooth UI", "High Performance"],
        },

    ]);

    // 🗑 Delete Function
    const deleteService = (id) => {
        setServices(services.filter((service) => service.id !== id));
    };

    // ✏️ Update Function (Just for Example)
    const updateService = (id) => {
        alert(`Update Service ID: ${id}`);
    };

    return (
        <div>

            {/* <h2 className="text-2xl font-bold mb-6 justify-self-center flex" >All Income Tax Blogs</h2> */}
            <div className='common_Container'>
                <div className="common_head"  >
                    <h1>Income Tax Page</h1>
                    <h2>Home / Income Tax Page</h2>
                </div>
            </div>
            <div style={{
                paddingTop: '100px',
                paddingRight: '30px',
                paddingLeft: '30px',
            }}>
                {/* <Button variant="contained" component={Link} to="/admin-panel/AddIncomeTaxBlog">
                    Add Income Tax Blog
                </Button> */}
                <Table border="1">
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#f5f5f5" }}>
                            <TableCell>S no.</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Image</TableCell>

                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((service, index) => (
                            <TableRow key={service.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{service.title}</TableCell>
                                <TableCell>{service.description}</TableCell>
                                <TableCell>
                                    <img src={service.image} alt="Service" width="50" height="50" />
                                </TableCell>

                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        onClick={() => updateService(service.id)}
                                        style={{ marginRight: "8px" }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        size="small"
                                        onClick={() => deleteService(service.id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default AllIncomeTaxBlog;
