import React, { useState } from 'react';
import axios from 'axios';
import TableComponent from './Components/TableComponent';
import UserInputComponent from './Components/UserInputComponent';

const App: React.FC = () => {
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState<any[]>([]);

  const fetchData = async (username: string) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      const data = response.data.map((repo: any) => ({
        name: repo.name,
        url: repo.html_url,
      }));
      const repoColumns = [
        { Header: 'Repository Name', accessor: 'name' },
        { Header: 'Repository URL', accessor: 'url' },
      ];
      setColumns(repoColumns);
      setTableData(data);
    } catch (error) {
      console.error('Error fetching data from GitHub API:', error);
    }
  };

  return (
    <div>
      <UserInputComponent onSearch={fetchData} />
      <TableComponent columns={columns} data={tableData} />
    </div>
  );
};

export default App;
