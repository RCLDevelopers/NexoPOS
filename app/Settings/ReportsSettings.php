<?php

namespace App\Settings;

use App\Services\SettingsPage;

class ReportsSettings extends SettingsPage
{
    const IDENTIFIER = 'ns.reports';

    public function __construct()
    {
        $this->form = [
            'tabs' => [
                'general' => include( dirname( __FILE__ ) . '/reports/general.php' ),
            ],
        ];
    }
}
