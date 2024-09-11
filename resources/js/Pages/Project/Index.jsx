import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import {
    PROJECT_STATUS_CLASS_MAP,
    PROJECT_STATUS_TEXT_MAP,
} from "@/constants.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import React from "react";

export default function index({ auth, projects, queryParams = null }) {
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("project.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        e.preventDefault(); // Prevent default behavior
        searchFieldChanged(name, e.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Search and other header components */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="relative w-1/3">
                            <TextInput
                                className="w-full pl-4 pr-10 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue={queryParams.name}
                                placeholder="Project Name"
                                onBlur={(e) =>
                                    searchFieldChanged("name", e.target.value)
                                }
                                onKeyPress={(e) => onKeyPress("name", e)}
                            />
                            <div className="absolute right-3 top-2">
                                <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </div>
                        </div>

                        <div className="relative">
                            <SelectInput
                                className="w-full pl-4 pr-10 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                                defaultValue={queryParams.status}
                                onChange={(e) =>
                                    searchFieldChanged("status", e.target.value)
                                }
                            >
                                <option value="">Select Status</option>
                                <option value="pending">Pending</option>
                                <option value="in_progress" >In Progress</option>
                                <option value="completed">Completed</option>
                            </SelectInput>
                            <div className="absolute right-3 top-2 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                  
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-white-700 uppercase bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-left">
                                            ID
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-left">
                                            Image
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-left">
                                            Name
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-left">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-left">
                                            Create Date
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-left">
                                            Due Date
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-left text-nowrap">
                                            Created By
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800">
                                    {projects.data.map((project) => (
                                        <tr
                                            className="hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700"
                                            key={project.id}
                                        >
                                           
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                {project.id}
                                            </td>

                                         
                                            <td className="px-6 py-4">
                                            <img
                                                    src={project.image_path}
                                                    style={{ width: 60 }}
                                                    alt={project.name}
                                                />
                                            </td>

                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                {project.name}
                                            </td>

                                        
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`px-2 py-1 rounded-full text-white font-semibold whitespace-nowrap ${
                                                        PROJECT_STATUS_CLASS_MAP[
                                                            project.status
                                                        ] || "bg-gray-500"
                                                    }`}
                                                >
                                                    {
                                                        PROJECT_STATUS_TEXT_MAP[
                                                            project.status
                                                        ]
                                                    }
                                                </span>
                                            </td>

                                         
                                            <td className="px-6 py-4 text-gray-900 dark:text-white text-nowrap">
                                                {project.created_at}
                                            </td>

                                           
                                            <td className="px-6 py-4 text-gray-900 dark:text-white text-nowrap">
                                                {project.due_date}
                                            </td>

                                         
                                            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                {project.createdBy.name}
                                            </td>

                                            <td className="px-6 py-4 text-right flex justify-end items-center">
    <Link
        href={route("project.edit", project.id)}
        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-600"
    >
        <FaEdit className="inline-block w-5 h-5" />
    </Link>
    <Link
        href={route("project.destroy", project.id)}
        className="ml-4 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
    >
        <FaTrashAlt className="inline-block w-5 h-5" />
    </Link>
</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
