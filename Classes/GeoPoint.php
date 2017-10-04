<?php
declare(strict_types=1);

namespace Ttree\GeoPointEditor;

final class GeoPoint {
    protected $longitude;
    protected $latitude;

    public function __construct(float $longitude, float $latitude)
    {
        $this->longitude = $longitude;
        $this->latitude = $latitude;
    }

    public static function createFromString(string $string): GeoPoint
    {
        $point = \json_decode($string);
        return new GeoPoint($point->lon, $point->lat);
    }

    public function getLongitude(): float
    {
        return $this->longitude;
    }

    public function getLatitude(): float
    {
        return $this->latitude;
    }

    public function toArray(): array
    {
        return [
            'lon' => $this->longitude,
            'lat' => $this->latitude,
        ];
    }

    public function __toString(): string
    {
        return \json_encode($this->toArray());
    }
}
