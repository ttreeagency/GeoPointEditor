<?php
declare(strict_types=1);

namespace Ttree\GeoPointEditor;

use Neos\Flow\Property\PropertyMappingConfigurationInterface;
use Neos\Flow\Property\TypeConverter\AbstractTypeConverter;

final class GeoPointJsonSerializer extends AbstractTypeConverter
{
    protected $sourceTypes = [GeoPoint::class];
    protected $targetType = 'string';

    public function convertFrom($source, $targetType, array $convertedChildProperties = [], PropertyMappingConfigurationInterface $configuration = null)
    {
        return (string)$source;
    }
}
