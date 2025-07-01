import { useState } from "react";
import Swal from "sweetalert2";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ListingsTable = () => {
  const [listings, setListings] = useState([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      title: "Private Room in Atlanta",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      title: "Luxury Apartment Downtown",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      title: "Cozy Studio Near Campus",
    },
  ]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This listing will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff8c00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setListings((prev) => prev.filter((item) => item.id !== id));
        Swal.fire("Deleted!", "Listing has been deleted.", "success");
      }
    });
  };

  return (
    <div className="overflow-x-auto container  py-3 mx-auto  mt-6 rounded-lg ">
      <table className="min-w-full bg-white text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Name</th>
            <th className="px-4 py-2 text-left font-semibold">Email</th>
            <th className="px-4 py-2 text-left font-semibold">Title</th>
            <th className="px-4 py-2 text-left font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Actions
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => alert(`Edit ${item.id}`)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
          {listings.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No listings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsTable;
