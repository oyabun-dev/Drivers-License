<?php
$get = filter_input_array(INPUT_GET);
if (isset($get)) {
    $type = $get['drivers_license_type'];
    // $type = $drivers_license_type;
    header('Location: ./exam.php?type=' . $type);
} else {
    error_log('error');
}
