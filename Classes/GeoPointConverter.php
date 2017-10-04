<?php
declare(strict_types=1);

namespace Ttree\GeoPointEditor;

use Neos\Flow\Property\PropertyMappingConfigurationInterface;
use Neos\Flow\Property\TypeConverter\AbstractTypeConverter;

final class GeoPointConverter extends AbstractTypeConverter
{
    protected $sourceTypes = ['string'];
    protected $targetType = GeoPoint::class;

    public function convertFrom($source, $targetType, array $convertedChildProperties = [], PropertyMappingConfigurationInterface $configuration = null)
    {
        return GeoPoint::createFromString($source);
    }
}
