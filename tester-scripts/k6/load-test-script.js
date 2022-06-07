import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export default function () {
    const url = 'http://localhost:3300';
    check(http.get(url), {
        'status is 200': (r) => r.status === 200,
    }) || errorRate.add(1);
}