import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Link } from "react-router-dom";

export default function DataTableComponent({ products }) {
    return (
        <div className="overflow-x-auto p-8">
            <Table striped>
                <TableHead>
                    <TableHeadCell>Photo</TableHeadCell>
                    <TableHeadCell>Title</TableHeadCell>
                    <TableHeadCell>Category</TableHeadCell>
                    <TableHeadCell>Price</TableHeadCell>
                    <TableHeadCell>
                        <span className="sr-only">Actions</span>
                    </TableHeadCell>
                </TableHead>
                <TableBody>
                    {products && products.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-12 h-12 object-contain"
                                />
                            </TableCell>
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {product.title}
                            </TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>${product.price}</TableCell>
                            <TableCell>
                                <Link 
                                    to={`/product/${product.id}`}
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    View Details
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}