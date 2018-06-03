import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { ViewTitle } from 'react-admin';

export default () => (
    <Card>
        <ViewTitle title="404" />
        <CardContent>
            <h1>Không tìm thấy trang bạn yêu cầu</h1>
        </CardContent>
    </Card>
);