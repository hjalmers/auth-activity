<script lang="ts">
    export let activities;
    import platform from '../node_modules/platform/platform.js';
    import {formatDate} from "./utilities/date";
</script>
<table class="table">
    <thead>
        <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Method</th>
            <th>Device</th>
            <th>Location</th>
            <th>IP-address</th>
        </tr>
    </thead>
    <tbody>
        {#each activities as row}
            <tr>
                <td class="text-nowrap">{formatDate(row.date, 'YYYY-MM-DD HH:mm:ss')}</td>
                <td class="text-nowrap">{row.type}</td>
                <td>{row.method}</td>
                <td>{platform.parse(row.userAgent)}</td>
                <td>{row.location}</td>
                <td>{row.ip || ''}</td>
            </tr>
        {/each}
    </tbody>
</table>
