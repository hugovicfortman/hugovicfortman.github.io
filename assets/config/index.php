<?php
    if(in_array(md5($_SERVER['HTTP_HOST']), ['00e76529c0935c09a1e6f3ad306821c2', 'a8d2b3a03fef1de48e5da22071f1ba11'])) {
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        $config = file_get_contents('./config.prod.json');
        $rawtoken = [md5(date("d-m-Y"))."_1wib529", "nct_T7ChlCDm1wibHOMgjfp3R7TtsUsvFu1bshUO"];
        print(str_replace('@btoken', jumble($rawtoken), $config));
    }else {
        header('HTTP/1.1 404 File Not Found', true, 404);
    }
    // victorfortman.com - a8d2b3a03fef1de48e5da22071f1ba11
    // localhost:3003 - 00e76529c0935c09a1e6f3ad306821c2

    /**
     * jumble($arg: array<string>[2]): string
     */
    function jumble($arg) {
        list($s1, $s2) = $arg;
        $l1 = strlen($s1) + strlen($s2);
        list($l4, $l8) = [$l1/4, $l1/8];
        $fac1 = [str_split($s1, $l8), str_split($s2, $l8)];
        $fac = [];
        for($i = 0; $i < 4; $i++) {
            $fac[] = ($fac1[0])[$i];
            $fac[] = ($fac1[1])[$i];
        }
        return implode('', $fac);
    }
?>